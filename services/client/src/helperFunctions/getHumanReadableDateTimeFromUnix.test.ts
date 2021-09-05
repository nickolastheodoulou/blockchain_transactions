import getHumanReadableDateTimeFromUnix from './getHumanReadableDateTimeFromUnix'


test('Date time of 1st Jan 2020 is return correctly for Unix timestamp', () => {
  expect(getHumanReadableDateTimeFromUnix(1577836800)).toBe('1/1/2020, 12:00:00 AM')
})
