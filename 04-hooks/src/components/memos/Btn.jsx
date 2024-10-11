import React from 'react'

const Btn = ({add}) => {

  console.log("add se agregó")

  return (
    <button className='btn btn-info' onClick={add}>+1</button>
  )
}

export default React.memo(Btn)