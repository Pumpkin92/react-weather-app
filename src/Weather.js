import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-wrapping">
          <div className="search-bar">
            <form id="search-field">
              <div className="row">
                <div className="col-9">
                  <input
                    type="text"
                    id="type-here"
                    className="search"
                    placeholder="Search for your city"
                    autofocus="on"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input type="submit" class="search-btn" value="Search" />
                  <span>
                    <button className="location-btn" id="location-btn">
                      <span>📍</span>
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-6 weather-description-box">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  {" "}
                  <FormattedDate date={weatherData.date} />{" "}
                </li>

                <span className="description"> {weatherData.description}</span>
                <li>
                  Humidity:
                  <span className="humidity-number">
                    <span> {weatherData.humidity}</span>%,{" "}
                  </span>
                  Wind:{" "}
                  <span className="wind-number">
                    <span>{weatherData.wind}</span>mph
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <div className="temp">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  id="weather-icon"
                />{" "}
                <span id="temp">{weatherData.temperature}</span>
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
          <div className="col">
            <p>
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
                              <ReactAnimatedWeather
                                icon={"CLEAR_DAY"}
                                color={"pink"}
                                size={51}
                                animate={true}
                              />
                            </div>
                            <br />
                            <div className="weekly-temps">
                              <span className="max-temp">5°</span>
                              <span className="min-temp">3°</span>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </Container>
                </div>
              </span>
            </p>
          </div>
          <footer>
            This project was coded by Lucy Shaw and is{" "}
            <a
              href="https://github.com/Pumpkin92/react-weather-app"
              target="_blank"
            >
              open-sourced on GitHub
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    const apiKey = "a2e69ade2d5f80fe8dd4f0ed09576a2a";
    let city = "london";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "loading";
  }
}
