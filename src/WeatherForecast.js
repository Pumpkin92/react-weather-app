import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function WeatherForecast() {
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return (
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
      </p>
    </div>
  );
}
