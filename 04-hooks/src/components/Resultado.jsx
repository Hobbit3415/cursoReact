import React from 'react'
import PropTypes from 'prop-types'

const Resultado = ({ operacion, calculo }) => {
  return (
    <>
      <br />
      <label className="text-lg">{operacion}: </label>
      <span className='text-lg'>{calculo}</span>
    </>
  )
}

Resultado.propTypes = {
  operacion: PropTypes.string,
  calculo: PropTypes.number
}

export default Resultado