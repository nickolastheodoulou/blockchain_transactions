import React from 'react'
import ComponentPaper from './ComponentPaper'

interface IPrices {
  BTC: number;
  ETH: number
}

const LivePrices = (props: { prices: IPrices }) => {
  const { prices } = props
  return(
    <ComponentPaper>
      <h2>Current Prices</h2>
      <p>BTC: ${prices.BTC}</p>
      <p>ETH: ${prices.ETH}</p>
    </ComponentPaper>
  )
}

export default LivePrices
