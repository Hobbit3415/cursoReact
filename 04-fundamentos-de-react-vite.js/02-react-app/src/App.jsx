import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const nombre = "Moro";

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://reactjs.org" target="_blank">
          {/* {} estas llaves son una "interpolacion de variables" */}
          {/* La interpolacion de variables permiten ejecutar JS*/}
          <img src={reactLogo} className="logo react" alt="React logo" />
          <pre>{new Date().getMonth()}</pre>
        </a>
      </header>
    </div>
  );
}

export default App;
