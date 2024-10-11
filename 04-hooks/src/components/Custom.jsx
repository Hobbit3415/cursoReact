import { useCounter } from "../hooks/useCounter"

export const Custom = () => {

  const [counter, increment, decrement] = useCounter(23, 5)

  // console.log(counter)

  return (
    <>
      <h1>CustomHook: {counter}</h1>
      <hr />
      <button className='btn btn-info mx-1' onClick={decrement}> - 1 </button>
      <button className='btn btn-info mx-1' onClick={increment}> + 1 </button>
    </>
  )
}
