import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Resultado from './Resultado'
import { operaciones } from '../helpers/operaciones'

const NumberInput = ({ name }) => {

  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0,
  })

  // Se desestructura el objeto que viene del helper para utilizar las variables individuales
  const { handleChange, suma, resta, multiplicacion, division, numero1, numero2 } = operaciones(numeros, setNumeros)

  return (
    <>
      <label className='text-lg'>Numero 1:
        <input className='rounded-md border-0 px-1 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' name='numero1' value={numero1} onChange={handleChange} type='number' />
      </label>
      <br />
      <label className='text-lg'>Numero 2:
        <input className='rounded-md border-0 px-1 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' name='numero2' value={numero2} onChange={handleChange} type='number' />
      </label>

      <Resultado operacion={"Suma"} calculo={suma()} />
      <Resultado operacion={"Resta"} calculo={resta()} />
      <Resultado operacion={"Multiplicacion"} calculo={multiplicacion()} />
      <Resultado operacion={"Division"} calculo={division()} />

    </>
  )
}

NumberInput.propTypes = {
  name: PropTypes.string
}

export default NumberInput