import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import axios from "axios";

export default function WeatherForecast(response) {
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "a2e69ade2d5f80fe8dd4f0ed09576a2a";
  let latitude = response.coordinates.lat;
  let longitude = response.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="col">
      <span>
        <div>
          <Container className="days">
            <Row>
              {days.map(function (value) {
                return (
                  <Col>
                    <p>
                      <span>{value}</span>
                    </p>
                    <br />
                    <div className="icon">
                      <WeatherIcon code="01d" size={51} color={"pink"} />
                    </div>
                    <br />
                    <div className="weekly-temps">
                      <span className="max-temp">5° </span>
                      <span className="min-temp">3°</span>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </span>
    </div>
  );
}
