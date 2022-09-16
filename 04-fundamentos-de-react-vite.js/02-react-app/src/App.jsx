import { useState } from "react";

import reactLogo from "./assets/react.svg";
import "./App.css";

const App = () => {
  const [contador, setContador] = useState(10);

  const disminuir = () => {
    setContador(contador - 1);
  };

  const aumentar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={reactLogo}
          width="250"
          className="logo react"
          alt="React logo"
        />
        <p>
          <button onClick={disminuir}>-</button>
          <h1>{contador}</h1>
          <button onClick={aumentar}>+</button>
        </p>
      </header>
    </div>
  );
};

export default App;
