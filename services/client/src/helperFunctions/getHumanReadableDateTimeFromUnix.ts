import dayjs from 'dayjs'


const getHumanReadableDateTimeFromUnix = (unixTimestamp: number) => {
  const formattedDate = dayjs.unix(unixTimestamp).format('YYYY-MM-DDTHH:mm:ss[Z]')
  return formattedDate
}

export default getHumanReadableDateTimeFromUnix
