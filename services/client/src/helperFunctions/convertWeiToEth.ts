import roundTo8Decimals from './roundTo8Decimals'

const convertWeiToEth = (wei:number) => {
  const weiToEthConversionFactor = 0.000000000000000001
  const eth = wei * weiToEthConversionFactor
  return roundTo8Decimals(eth)
}

export default convertWeiToEth
