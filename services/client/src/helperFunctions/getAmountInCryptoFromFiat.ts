import roundTo8Decimals from './roundTo8Decimals'

interface IPrices {
  ETH: number;
  BTC: number;
}
const getAmountInCryptoFromFiat = (pair: string, fiatValue: number, prices:IPrices) => {
  let amountCrypto = 0
  const pairCoins = pair.split('-')

  // This could be more generic if there are more Crypto coins to consider
  if(pairCoins.includes('ETH')) {
    // @ts-ignore
    amountCrypto = fiatValue/ prices.ETH
  } else if(pairCoins.includes('BTC')) {
    // @ts-ignore
    amountCrypto = fiatValue/ prices.BTC
  } else {
    amountCrypto = 0
  }

  return roundTo8Decimals(amountCrypto)
}

export default getAmountInCryptoFromFiat
