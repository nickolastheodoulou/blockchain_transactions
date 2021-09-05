import React, {useEffect, useState} from 'react'
import axios from 'axios'
import getHumanReadableDateTimeFromUnix from '../../helperFunctions/getHumanReadableDateTimeFromUnix'

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
  hash: string;
  txFee: string;
  blockHeight: string;
  insertedAt: number;
}

interface ICustodial {
  createdAt: string;
  id: string;
}

const Transactions = () => {
  const initialPriceState = {
    'BTC' : 0,
    'ETH' : 0
  }

  const [prices, setPrices] = useState(initialPriceState)
  const [transactionData, setTransactionData] = useState<ITransactionData[]>([])


  const getBtcTxsData = async() => {
    const res = await axios.get('http://localhost:8888/btc-txs')

    const formattedTransactionsData = res.data.map((transactionData: IBtcNonCustodial) => {
      // eslint-disable-next-line no-unused-vars
      const {hash, ...filteredTransactionData } = transactionData  // spread operator to drop the hash ket value par in the objet
      return{
        ...filteredTransactionData,
        data: null,
        erc20: null,
        pair: null,
        state: null,
        fiatValue: null,
        fiatCurrency: null,
        version: null,
        hash_or_transaction_id: transactionData.hash,
        insertedAt: getHumanReadableDateTimeFromUnix(transactionData.insertedAt),
      }
    })

    setTransactionData(prevState => ([...prevState, ...formattedTransactionsData]))
  }

  const getEthTxsData = async() => {
    const res = await axios.get('http://localhost:8888/eth-txs')

    const formattedTransactionsData = res.data.map((transactionData: IEthNonCustodial) => {
      // eslint-disable-next-line no-unused-vars
      const {hash, ...filteredTransactionData } = transactionData  // spread operator to drop the hash ket value par in the objet
      return{
        ...filteredTransactionData,
        coin: 'ETH',
        double_spend: null,
        fromWatchOnly: null,
        toAddress: null,
        toWatchOnly: null,
        pair: null,
        state: null,
        fiatValue: null,
        fiatCurrency: null,
        version: null,
        hash_or_transaction_id: transactionData.hash,
        blockHeight: parseInt(transactionData.blockHeight),
        txFee: parseInt(transactionData.txFee),
        insertedAt: getHumanReadableDateTimeFromUnix(transactionData.insertedAt),
      }
    })

    setTransactionData(prevState => ([...prevState, ...formattedTransactionsData]))
  }

  const getCustodialTxsData = async() => {
    const res = await axios.get('http://localhost:8888/custodial-txs')

    const formattedTransactionsData = res.data.map((transactionData: ICustodial) => {
      // eslint-disable-next-line no-unused-vars
      const {id, createdAt, ...filteredTransactionData } = transactionData  // spread operator to drop the hash ket value par in the objet
      return{
        ...filteredTransactionData,
        amount: null,
        blockHeight: null,
        coin: null,
        double_spend: null,
        from: null,
        fromWatchOnly: null,
        to: null,
        toAddress: null,
        toWatchOnly: null,
        data: null,
        erc20: null,
        hash_or_transaction_id: transactionData.id,
        insertedAt: transactionData.createdAt,
      }
    })

    setTransactionData(prevState => ([...prevState, ...formattedTransactionsData]))

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
      await gePricesData()
    })()

  }, [])


  return (
    <>
      <h1>transactionData</h1>
      { JSON.stringify(transactionData) }
      <h1>prices</h1>
      { JSON.stringify(prices) }
    </>
  )
}

export default Transactions
