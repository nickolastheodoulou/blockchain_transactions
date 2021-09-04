import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [btcTxs, setBtcTxs] = useState([])

  const [ethTxs, setEthTxs] = useState([])
  const [custodialTxs, setCustodialTxs] = useState([])
  const [prices, setPrices] = useState([])

  const getBtcTxsData = async() => {
    const res = await axios.get('http://localhost:8888/btc-txs')
    setBtcTxs(res.data)
  }

  const getEthTxsData = async() => {
    const res = await axios.get('http://localhost:8888/eth-txs')
    setEthTxs(res.data)
  }

  const getCustodialTxsData = async() => {
    const res = await axios.get('http://localhost:8888/custodial-txs')
    setCustodialTxs(res.data)
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
      <h1>btcTxs</h1>
      { JSON.stringify(btcTxs) }
      <h1>ethTxs</h1>
      { JSON.stringify(ethTxs) }
      <h1>custodialTxs</h1>
      { JSON.stringify(custodialTxs) }
      <h1>prices</h1>
      { JSON.stringify(prices) }
    </>
  )
}

export default App
