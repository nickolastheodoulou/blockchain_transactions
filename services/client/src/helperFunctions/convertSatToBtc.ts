const convertSatToBtc = (sat:number) => {
  const satToBtcConversionFactor = 0.00000001
  const btc = sat * satToBtcConversionFactor
  const roundedBtc = Math.round(btc * 100000000) / 100000000 // simplest way I found to guarantee we round to 8 decimal points
  return roundedBtc
}

export default convertSatToBtc
