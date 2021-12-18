import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(response) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [response.coordinates]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="col">
        <span>
          <div>
            <Container className="days">
              <Row>
                {forecast.map(function (dailyForecast, index) {
                  if (index < 5) {
                    return (
                      <Col key={index}>
                        <WeatherForecastDay data={dailyForecast} />
                      </Col>
                    );
                  } else {
                    return null;
                  }
                })}
              </Row>
            </Container>
          </div>
        </span>
      </div>
    );
  } else {
    let apiKey = "a2e69ade2d5f80fe8dd4f0ed09576a2a";
    let latitude = response.coordinates.lat;
    let longitude = response.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
