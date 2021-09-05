
const convertWeiToEth = (wei:number) => {
  const weiToEthConversionFactor = 0.000000000000000001
  const eth = wei * weiToEthConversionFactor
  const roundedEth = Math.round(eth * 100000000) / 100000000 // simplest way I found to guarantee we round to 8 decimal points
  return roundedEth
}

export default convertWeiToEth
