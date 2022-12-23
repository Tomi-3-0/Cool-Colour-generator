import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  console.log(hexColor)
  const [alert, setAlert] = useState(false);
  const gbk = rgb.join(',');
  const hex = rgbToHex(...rgb);
  // console.log(gbk)

  useEffect(()=> {
    const timeout = setTimeout(()=> {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
    }, [alert])

  const hexValue = `#${hexColor}`
  return <article 
  className= {`color ${index > 10 && 'color-light'}`} 
  style = {{background: `rgb(${gbk})`}}
  onClick = {() => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  }}>
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hexValue}</p>
    {alert && <p className='alert'> Copied to clipboard</p>}

  </article>
}

export default SingleColor
