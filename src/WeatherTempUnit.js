import React, { useState } from "react";

export default function WeatherTempUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <span id="temp">{props.celsius}</span>
        <a
          href="/"
          onClick={showCelsius}
          className="celsius active"
          id="celsius"
        >
          °C
        </a>
        <span className="divider">|</span>
        <a
          href="/"
          onClick={showFarenheit}
          className="farenheight"
          id="farenheight"
        >
          °F
        </a>
      </span>
    );
  } else {
    return (
      <span>
        <span id="temp">{Math.round(farenheit())}</span>
        <a href="/" onClick={showCelsius} className="celsius" id="celsius">
          °C
        </a>
        <span className="divider">|</span>
        <a
          href="/"
          onClick={showFarenheit}
          className="farenheight active"
          id="farenheight"
        >
          °F
        </a>
      </span>
    );
  }
}
