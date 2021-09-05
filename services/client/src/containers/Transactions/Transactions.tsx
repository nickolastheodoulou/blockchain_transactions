import React, {useEffect, useState} from 'react'
import axios from 'axios'
import getHumanReadableDateTimeFromUnix from '../../helperFunctions/getHumanReadableDateTimeFromUnix'
import convertSatToBtc from '../../helperFunctions/convertSatToBtc'
import convertWeiToEth from '../../helperFunctions/convertWeiToEth'
import getAmountInCryptoFromFiat from '../../helperFunctions/getAmountInCryptoFromFiat'
import ProgressSpinner from '../../components/ProgressSpinner'
import TransactionTable from '../../components/TransactionTable/TransactionTable'
import Heading from '../../components/Heading'
import LivePrices from '../../components/LivePrices'
import BodyPaper from '../../components/BodyPaper'

interface IBtcNonCustodial {
  type: string;
  txFee: number;
  toWatchOnly: boolean;
  toAddress: string;
  to: string;
  status: string;
  insertedAt: number;
  hash: string;
  fromWatchOnly: boolean;
  from: string;
  doubleSpend: boolean;
  description: string;
  coin: string;
  blockHeight: number;
  amount: number;
}

interface IEthNonCustodial {
  amount: number;
  hash: string;
  txFee: string;
  blockHeight: string;
  insertedAt: number;
}

interface ICustodial {
  pair: string;
  fiatValue: string;
  createdAt: string;
  id: string;
}


const Transactions = () => {
  const initialPriceState = {
    'BTC' : 0,
    'ETH' : 0
  }

  // This stores the price data
  const [prices, setPrices] = useState(initialPriceState)

  // These states hold the transaction data
  const [btcTxtData, setBtcTxtData] = useState<IBtcNonCustodial[]>([])
  const [EthTxtData, setEthTxtData] = useState<IEthNonCustodial[]>([])
  const [custodialTxsData, setCustodialTxsData] = useState<ICustodial[]>([])

  // This just sets a loading wheel if something is loading
  const [isLoading, setIsLoading] = useState(false)


  const getBtcTxsData = async() => {

    setIsLoading(true)
    // TODO wrap in try catch. Then set toast to show if failed
    const res = await axios.get('http://localhost:8888/btc-txs')
    setIsLoading(false)

    const formattedTransactionsData = res.data.map((transactionData: IBtcNonCustodial) => {
      // eslint-disable-next-line no-unused-vars
      const {hash, coin, amount, ...filteredTransactionData } = transactionData  // spread operator to drop the key value pairs not included in filteredTransactionData
      return{
        ...filteredTransactionData,
        isCustodial: false,
        data: null,
        erc20: null,
        state: null,
        fiatCurrency: null,
        version: null,
        'coin(s)': transactionData.coin,
        'Amount (Crypto)':convertSatToBtc(transactionData.amount),
        'Amount (Fiat)':prices.BTC * convertSatToBtc(transactionData.amount),
        hash_or_transaction_id: transactionData.hash,
        insertedAt: getHumanReadableDateTimeFromUnix(transactionData.insertedAt),
      }
    })

    setBtcTxtData([...formattedTransactionsData])
  }

  const getEthTxsData = async() => {
    setIsLoading(true)
    // TODO wrap in try catch. Then set toast to show if failed
    const res = await axios.get('http://localhost:8888/eth-txs')
    setIsLoading(false)

    const formattedTransactionsData = res.data.map((transactionData: IEthNonCustodial) => {
      // eslint-disable-next-line no-unused-vars
      const {hash, amount, ...filteredTransactionData } = transactionData // spread operator to drop the key value pairs not included in filteredTransactionData
      return{
        ...filteredTransactionData,
        isCustodial: false,
        double_spend: null,
        fromWatchOnly: null,
        toAddress: null,
        toWatchOnly: null,
        state: null,
        fiatCurrency: null,
        version: null,
        'coin(s)':'ETH',
        'Amount (Crypto)':convertWeiToEth(transactionData.amount),
        'Amount (Fiat)':prices.ETH * convertWeiToEth(transactionData.amount),
        hash_or_transaction_id: transactionData.hash,
        blockHeight: parseInt(transactionData.blockHeight),
        txFee: parseInt(transactionData.txFee),
        insertedAt: getHumanReadableDateTimeFromUnix(transactionData.insertedAt),
      }
    })

    setEthTxtData([...formattedTransactionsData])
  }


  const getCustodialTxsData = async() => {
    setIsLoading(true)
    // TODO wrap in try catch. Then set toast to show if failed
    const res = await axios.get('http://localhost:8888/custodial-txs')
    setIsLoading(false)


    const formattedTransactionsData = res.data.map((transactionData: ICustodial) => {
      // eslint-disable-next-line no-unused-vars
      const {id, createdAt, fiatValue, pair, ...filteredTransactionData } = transactionData  // spread operator to drop the key value pairs not included in filteredTransactionData

      return{
        ...filteredTransactionData,
        isCustodial: true,
        blockHeight: null,
        double_spend: null,
        from: null,
        fromWatchOnly: null,
        to: null,
        toAddress: null,
        toWatchOnly: null,
        data: null,
        erc20: null,
        'coin(s)': transactionData.pair,
        'Amount (Fiat)': parseFloat(transactionData.fiatValue),
        'Amount (Crypto)': getAmountInCryptoFromFiat(pair, parseFloat(transactionData.fiatValue), prices),
        hash_or_transaction_id: transactionData.id,
        insertedAt: transactionData.createdAt,
      }
    })
    setCustodialTxsData([...formattedTransactionsData])

  }

  const gePricesData = async() => {
    setIsLoading(true)
    const res = await axios.get('http://localhost:8888/prices')
    setIsLoading(false)
    setPrices(res.data)


  }

  useEffect(() => {

    (async() => {
      await getBtcTxsData()
      await getEthTxsData()
      await getCustodialTxsData()
    })()

  }, [prices])

  useEffect(() => {
    (async() => {
      await gePricesData()
    })()
  }, [])


  return (
    <>
      <BodyPaper>
        <Heading/>
        <LivePrices
          prices={prices}
        />
      </BodyPaper>
      <TransactionTable
        data={[...btcTxtData, ...EthTxtData, ...custodialTxsData]}
      />
      {isLoading && (
        <ProgressSpinner/>
      )}
    </>
  )
}

export default Transactions
