
const getHumanReadableDateTimeFromUnix = (unixTimestamp: number) => {
  const dateObject = new Date((unixTimestamp * 1000))
  const humanDateFormat = dateObject.toLocaleString()
  return humanDateFormat
}

export default getHumanReadableDateTimeFromUnix
