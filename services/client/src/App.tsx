import React from 'react'
import './App.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/vela-orange/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import Transactions from './containers/Transactions/Transactions'
import PrimeReact from 'primereact/api'

function App() {
  PrimeReact.ripple = true

  return(
    <Transactions />
  )
}

export default App
