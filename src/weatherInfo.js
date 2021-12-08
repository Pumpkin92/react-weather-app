import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-6 weather-description-box">
        <h1>{props.weatherData.city}</h1>
        <ul>
          <li>
            {" "}
            <FormattedDate date={props.weatherData.date} />{" "}
          </li>
          <span className="description"> {props.weatherData.description}</span>
          <li>
            Humidity:
            <span className="humidity-number">
              <span> {props.weatherData.humidity}</span>%,{" "}
            </span>
            Wind:{" "}
            <span className="wind-number">
              <span>{props.weatherData.wind}</span>mph
            </span>
          </li>
        </ul>
      </div>

      <div className="col-6">
        <div className="temp">
          <img
            src={props.weatherData.imgUrl}
            alt={props.weatherData.description}
            id="weather-icon"
          />{" "}
          <span id="temp">{props.weatherData.temperature}</span>
          <a href="" className="celsius active" id="celsius">
            °C
          </a>
          <span className="divider">|</span>
          <a href="" className="farenheight" id="farenheight">
            °F
          </a>
        </div>
      </div>
    </div>
  );
}
