import convertWeiToEth from './convertWeiToEth'

test('Expect 3019313120320400000 wei to be 3.01931312 ETH', () => {
  expect(convertWeiToEth(3019313120320400000)).toBe(3.01931312)
})


