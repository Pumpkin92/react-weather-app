import React from "react";
import WeatherIcon from "./WeatherIcon";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <Row>
      <Col>
        <p>
          <span>{day()}</span>
        </p>

        <div className="icon pt-3">
          <WeatherIcon
            code={props.data.weather[0].icon}
            size={51}
            color={"pink"}
          />
        </div>
        <br />
        <div className="weekly-temps">
          <span className="max-temp">{maxTemp()}° </span>
          <span className="min-temp">{minTemp()}°</span>
        </div>
      </Col>
    </Row>
  );
}
