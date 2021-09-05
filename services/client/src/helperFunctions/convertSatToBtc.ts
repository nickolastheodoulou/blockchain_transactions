import roundTo8Decimals from './roundTo8Decimals'

const convertSatToBtc = (sat:number) => {
  const satToBtcConversionFactor = 0.00000001
  const btc = sat * satToBtcConversionFactor
  return roundTo8Decimals(btc)
}

export default convertSatToBtc
