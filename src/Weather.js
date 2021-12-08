import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

import WeatherInfo from "./weatherInfo";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let [city, setCity] = useState(props.defaultCity);

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
  function search() {
    const apiKey = "a2e69ade2d5f80fe8dd4f0ed09576a2a";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-wrapping">
          <div className="search-bar">
            <form id="search-field" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="text"
                    id="type-here"
                    className="search"
                    placeholder="Search for your city"
                    autofocus="on"
                    autocomplete="off"
                    onChange={handleChange}
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

          <WeatherInfo weatherData={weatherData} />

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
    search();
    return "loading";
  }
}
