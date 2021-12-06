import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Manchester" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
