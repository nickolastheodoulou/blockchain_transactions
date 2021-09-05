import getHumanReadableDateTimeFromUnix from './getHumanReadableDateTimeFromUnix'


test('Date time of 1st Jan 2020 is return correctly for Unix timestamp', () => {
  expect(getHumanReadableDateTimeFromUnix(1577836800)).toBe('2020-01-01T00:00:00Z')
})

test('Date time of Sun Sep 05 2021 04:59:28 GMT+0000 is return correctly for Unix timestamp', () => {
  expect(getHumanReadableDateTimeFromUnix(1630817968)).toBe('2021-09-05T04:59:28Z')
})

