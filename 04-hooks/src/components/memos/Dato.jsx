import { memo } from "react"

const Dato = ({value}) => {
  console.log("Otra vez me cargué")
  
  return (
    <>
      <p>{value}</p>
    </>
  )
}

export default memo(Dato)