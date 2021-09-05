import BodyPaper from './BodyPaper'
import React from 'react'

interface IPrices {
  BTC: number;
  ETH: number
}

const LivePrices = (props: { prices: IPrices }) => {
  const { prices } = props
  return(
    <BodyPaper>
      <h2>Current Prices</h2>
      <h3>BTC: {prices.BTC}</h3>
      <h3>ETH: {prices.ETH}</h3>
    </BodyPaper>
  )
}

export default LivePrices
