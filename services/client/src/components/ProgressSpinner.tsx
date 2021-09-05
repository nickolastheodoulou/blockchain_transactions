import { ProgressSpinner as PrimeReactProgressSpinner } from 'primereact/progressspinner'
import React from 'react'

const ProgressSpinner = () =>{
  const style = {width: '50px', height: '50px'}

  return(
    <PrimeReactProgressSpinner
      style={style}
      strokeWidth="5"
      fill="#EEEEEE"
      animationDuration=".5s"
    />
  )
}

export default ProgressSpinner
