import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-wrapping">
          <Weather defaultCity="Manchester" />
          <footer>
            This project was coded by Lucy Shaw and is{" "}
            <a
              href="https://github.com/Pumpkin92/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
