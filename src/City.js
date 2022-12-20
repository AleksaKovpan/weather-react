import React from "react";
import "./City.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function City() {
  let weatherData = {
    city: "Kyiv",
    temperature: "2",
    temperatureFeelsLike: "1",
    month: "September",
    data: "10",
    day: "Saturday",
    description: "Cloudy",
    wind: "4",
    humidity: "35",
  };
  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="current-city-temp">
          <div className="city-data">
            <i className="fa fa-map-pin" aria-hidden="true"></i>
            <span className="current-city"> {weatherData.city}</span>
            <div>
              <span className="current-month">{weatherData.month}</span>
              <span className="current-date"> {weatherData.data}</span> <br />
              <div className="current-day">{weatherData.day}</div>
            </div>
          </div>
          <div className="current-temp">
            <i
              className="fa fa-temperature-three-quarters"
              aria-hidden="true"
            ></i>
            <span className="current-temp-value">
              {" "}
              {weatherData.temperature}
            </span>
            <span className="unit">°C</span>
            <div className="current-temp-value-feeling">
              feels like{" "}
              <span className="temp-value-feeling">
                {weatherData.temperatureFeelsLike}
              </span>
              °
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        {/* <img src="" alt="cloudy" className="weather-icon" /> */}
        <div className="current-icon">⛅</div>
        <div className="weather-description"> {weatherData.description}</div>
      </div>
      <div className="col-sm-4">
        <div className="weather-detail-item">
          <div className="weather-description-item">Wind</div>
          <span className="weather-detail-icon">💨</span>
          <span className="weather-value">
            <span className="wind-value"> {weatherData.wind}</span>
            <span> km/h</span>
          </span>

          <div className="weather-detail-item">
            <div className="weather-description-item">Humidity</div>
            <span className="weather-detail-icon">♒</span>
            <span className="weather-value">
              <span className="humidity-value"> {weatherData.humidity}</span>%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
