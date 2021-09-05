import convertSatToBtc from './convertSatToBtc'

test('Expect 74927492 sat to be 0.74927492 BTC', () => {
  expect(convertSatToBtc(74927492)).toBe(0.74927492)
})


