import React from 'react'
import { useState, useEffect } from 'react'

const State = () => {

  const [state, setState] = useState(0)

  useEffect(() => {
    console.log(state)
  }, [])

  const handleClick = () => {
    setState(state + 1)
  }

  return (
    <div className='container mx-auto'>
      <h1 className='mx-auto'>Use Effect</h1>
      <hr />
      <div className='row-auto'>
        <label>Cuenta: {state}</label>
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py px-4 rounded' onClick={handleClick} >+1</button>
    </div>
  )
}

export default State