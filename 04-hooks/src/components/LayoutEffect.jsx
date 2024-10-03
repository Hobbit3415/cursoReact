import React from 'react'
import { useState, useLayoutEffect, useEffect } from 'react'

const LayoutEffect = () => {
  
  const [data, setData] = useState([])

  const [lenght, setLenght] = useState(0)
  
  const efecto = data.length;

  const newData = [
    { 
      name: "emora",
      email: "emora@correo.com"
    },
    { 
      name: "emora",
      email: "emora@correo.com"
    },
    { 
      name: "emora",
      email: "emora@correo.com"
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setData(newData)
    }, 
    5000)
  }, [newData])
  

  useLayoutEffect(() => {
    setLenght(data.length)
  }, [])

  return (
    <>
    <h1>UseLayoutEffect</h1>
    <hr />
    <p>Valores { lenght }</p>
    </>
  )
}

export default LayoutEffect