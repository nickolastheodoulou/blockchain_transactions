import getAmountInCryptoFromFiat from './getAmountInCryptoFromFiat'

const prices = {
  'BTC' : 50000,
  'ETH' : 4000
}

test('Get correct amount for ETH-USD with a fiat value of 50', () => {
  expect(getAmountInCryptoFromFiat('ETH-USD', 8400, prices)).toBe( 2.1)
})

test('Get correct amount for USD-ETH with a fiat value of 50', () => {
  expect(getAmountInCryptoFromFiat('USD-ETH', 8400, prices)).toBe( 2.1)
})

test('Get correct amount for USD-BTC with a fiat value of 50', () => {
  expect(getAmountInCryptoFromFiat('USD-BTC', 75000, prices)).toBe( 1.5)
})


test('Get correct amount for USD-BTC with a fiat value of 50', () => {
  expect(getAmountInCryptoFromFiat('BTC-USD', 75000, prices)).toBe( 1.5)
})
