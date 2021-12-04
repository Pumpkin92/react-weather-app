import React from "react";
import "./Weather.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: "20",
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 10,
  };

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
                  autofocus="off"
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
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <ul>
              <li className="date">{weatherData.date}</li>
              <span id="am-pm">AM</span>,
              <span className="description">{weatherData.description}</span>
              <li>
                Humidity:
                <span className="humidity-number">
                  <span>{weatherData.humidity}</span>%
                </span>
                Wind:
                <span className="wind-number">
                  <span>{weatherData.wind} </span>mph
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
              <span id="temp">20</span>
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
      </div>
    </div>
  );
}
