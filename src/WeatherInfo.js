import React from "react";
import CurrentDate from "./CurrentDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { search } from "fontawesome";
export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <div className="row">
          <div className="col-sm-4">
            <div className="current-city-temp">
              <div className="city-data">
                <FontAwesomeIcon icon={faMapPin} />
                <span className="current-city"> {props.data.city}</span>
                <div>
                  <CurrentDate date={props.data.date} />
                </div>
              </div>
              <div className="current-temp">
                <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                <span className="current-temp-value">
                  {" "}
                  {props.weatherData.temperature}
                </span>
                <span className="unit">°C</span>
                <div className="current-temp-value-feeling">
                  feels like{" "}
                  <span className="temp-value-feeling">
                    {props.weatherData.temperatureFeelsLike}
                  </span>
                  °
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            {/* <img src="" alt="cloudy" className="weather-icon" /> */}
            <div className="current-icon">
              <img src={props.data.icon} alt={props.data.description} />
            </div>
            <div className="weather-description"> {props.data.description}</div>
          </div>
          <div className="col-sm-4">
            <div className="weather-detail-item">
              <div className="weather-description-item">Wind</div>
              <span className="weather-detail-icon">💨</span>
              <span className="weather-value">
                <span className="wind-value"> {props.data.wind}</span>
                <span> km/h</span>
              </span>

              <div className="weather-detail-item">
                <div className="weather-description-item">Humidity</div>
                <span className="weather-detail-icon">♒</span>
                <span className="weather-value">
                  <span className="humidity-value"> {props.data.humidity}</span>
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}