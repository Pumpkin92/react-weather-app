import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTempUnit from "./WeatherTempUnit";
import "./Weather.css";

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
          <WeatherIcon
            size={60}
            code={props.weatherData.icon}
            color={"#885DF1"}
          />

          <WeatherTempUnit celsius={props.weatherData.temperature} />
        </div>
      </div>
    </div>
  );
}
