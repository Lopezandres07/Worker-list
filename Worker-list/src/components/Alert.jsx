import React from 'react'

const Alert = ({color, message}) => {

  return (
    <>
      <p className={color}>{message}</p> 
    </>
  )
}

export default Alert