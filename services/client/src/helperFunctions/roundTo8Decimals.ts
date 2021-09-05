const roundTo8Decimals = (valueToRound: number) => Math.round(valueToRound * 100000000) / 100000000 // simplest way I found to guarantee we round to 8 decimal points

export default roundTo8Decimals
