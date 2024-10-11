import React, {useRef} from 'react'

export const Ref = () => {

  const ref = useRef(null)

  const handleRef = () => {
    // const ref = document.getElementById("area")

    ref.current.value = 'Hola mundo'
  }

  return (
    <>
      <h1 onClick={handleRef}>UseRef</h1>
      <hr />
      <textarea ref={ref} placeholder='Escribe un mensaje'></textarea>
    </>
  )
}

export default Ref