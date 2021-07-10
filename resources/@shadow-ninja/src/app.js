import React from "react"
import ReactDOM from "react-dom"
import Clicker from "./example/clicker"

const App = () => {
  return (
    <div>
      <h1>Clicker</h1>
      <Clicker />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))
