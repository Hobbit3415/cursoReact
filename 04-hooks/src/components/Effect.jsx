import { useEffect } from "react"
import { useState } from "react"

const Effect = () => {

  const [state, setState] = useState(0)
  
  useEffect =( () => {
    window.addEventListener( "mousemove", (e) => {
      setState(state + 1)
      console.log("moviendo")
    })

  }, [state])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Search
          </label>
          <input
            onChange={e => "123" && setState(e.target.value)}
            type="text"
            value={state}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}

export default Effect