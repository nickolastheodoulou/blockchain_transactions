import React, {useEffect, useState} from 'react'
import axios from 'axios'
import getHumanReadableDateTimeFromUnix from '../../helperFunctions/getHumanReadableDateTimeFromUnix'
import convertSatToBtc from '../../helperFunctions/convertSatToBtc'
import convertWeiToEth from '../../helperFunctions/convertWeiToEth'

interface ITransactionData {
    description: string;
}

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

  const [prices, setPrices] = useState(initialPriceState)
  const [btcTxtData, setBtcTxtData] = useState<ITransactionData[]>([])
  const [EthTxtData, setEthTxtData] = useState<ITransactionData[]>([])
  const [custodialTxsData, setCustodialTxsData] = useState<ITransactionData[]>([])


  const getBtcTxsData = async() => {
    const res = await axios.get('http://localhost:8888/btc-txs')

    const formattedTransactionsData = res.data.map((transactionData: IBtcNonCustodial) => {
      // eslint-disable-next-line no-unused-vars
      const {hash, coin, amount, ...filteredTransactionData } = transactionData  // spread operator to drop the hash ket value par in the objet
      return{
        ...filteredTransactionData,
        isCustodial: false,
        data: null,
        erc20: null,
        pair: null,
        state: null,
        fiatCurrency: null,
        version: null,
        'coin(s)': transactionData.coin,
        'Amount (Crypto)':convertSatToBtc(transactionData.amount),
        'Amount (Fiat)':convertSatToBtc(transactionData.amount) * prices.BTC,
        hash_or_transaction_id: transactionData.hash,
        insertedAt: getHumanReadableDateTimeFromUnix(transactionData.insertedAt),
      }
    })

    setBtcTxtData([...formattedTransactionsData])
  }

  const getEthTxsData = async() => {
    const res = await axios.get('http://localhost:8888/eth-txs')

    const formattedTransactionsData = res.data.map((transactionData: IEthNonCustodial) => {
      // eslint-disable-next-line no-unused-vars
      const {hash, amount, ...filteredTransactionData } = transactionData  // spread operator to drop the hash ket value par in the objet
      return{
        ...filteredTransactionData,
        isCustodial: false,
        double_spend: null,
        fromWatchOnly: null,
        toAddress: null,
        toWatchOnly: null,
        pair: null,
        state: null,
        fiatCurrency: null,
        version: null,
        'coin(s)':'ETH',
        'Amount (Crypto)':convertWeiToEth(transactionData.amount),
        'Amount (Fiat)':convertWeiToEth(transactionData.amount) * prices.ETH,
        hash_or_transaction_id: transactionData.hash,
        blockHeight: parseInt(transactionData.blockHeight),
        txFee: parseInt(transactionData.txFee),
        insertedAt: getHumanReadableDateTimeFromUnix(transactionData.insertedAt),
      }
    })

    setEthTxtData([...formattedTransactionsData])
  }

  const getCustodialTxsData = async() => {
    const res = await axios.get('http://localhost:8888/custodial-txs')

    const formattedTransactionsData = res.data.map((transactionData: ICustodial) => {
      // eslint-disable-next-line no-unused-vars
      const {id, createdAt, fiatValue, pair, ...filteredTransactionData } = transactionData  // spread operator to drop the hash ket value par in the objet
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
        // amount crypto needs to be calculated dynamically as it's either ETH or BTC
        hash_or_transaction_id: transactionData.id,
        insertedAt: transactionData.createdAt,
      }
    })
    setCustodialTxsData([...formattedTransactionsData])

  }

  const gePricesData = async() => {
    const res = await axios.get('http://localhost:8888/prices')
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
      <h1>btcTxtData</h1>
      { JSON.stringify(btcTxtData) }
      <h1>EthTxtData</h1>
      { JSON.stringify(EthTxtData) }
      <h1>custodialTxsData</h1>
      { JSON.stringify(custodialTxsData) }
      <h1>prices</h1>
      { JSON.stringify(prices) }
    </>
  )
}

export default Transactions
