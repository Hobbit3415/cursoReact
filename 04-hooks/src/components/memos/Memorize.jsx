import Dato from './Dato'
import Btn from './Btn'
import { useMemorizeApp } from '../../hooks/useMemorizeApp'

export const Memorize = () => {

  const [counter, pesadoMemo, add, hide] = useMemorizeApp()

  return (
    <>
      <h1>Memorize: <Dato value={counter}></Dato></h1>
      <hr />
      <pre>{pesadoMemo}</pre>
      <button className='btn btn-info' onClick={hide}>Ver/Quitar</button>
      <Btn add={add} />
    </>
  )
}
