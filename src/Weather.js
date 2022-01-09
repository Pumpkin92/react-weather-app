import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./weatherInfo";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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

  function retrievePosition(position) {
    let apiKey = "a2e69ade2d5f80fe8dd4f0ed09576a2a";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse);
  }
  function getPosition() {
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }
  function handlePosition(event) {
    event.preventDefault();
    getPosition();
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="search-bar">
          <form id="search-field" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-9">
                <input
                  type="text"
                  id="type-here"
                  className="search"
                  placeholder="Search for your city"
                  autoFocus="on"
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-3 text-center">
                <input type="submit" className="search-btn" value="Search" />
                <span>
                  <button className="location-btn" onClick={handlePosition}>
                    <span>📍</span>
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo weatherData={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "loading";
  }
}
