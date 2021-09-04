import React, {useEffect, useState} from 'react'
import axios from 'axios'

interface ITransactionData {
    description: string;
}

const Transactions = () => {

  const [prices, setPrices] = useState([])
  const [transactionData, setTransactionData] = useState<ITransactionData[]>([])

  const getBtcTxsData = async() => {
    const res = await axios.get('http://localhost:8888/btc-txs')
    setTransactionData(prevState => ([...prevState, ...res.data]))
  }

  const getEthTxsData = async() => {
    const res = await axios.get('http://localhost:8888/eth-txs')
    setTransactionData(prevState => ([...prevState, ...res.data]))
  }

  const getCustodialTxsData = async() => {
    const res = await axios.get('http://localhost:8888/custodial-txs')
    setTransactionData(prevState => ([...prevState, ...res.data]))
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
