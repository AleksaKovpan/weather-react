import React, { useState } from "react";
import "./City.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function City() {
  
  const [weatherData, setWeatherData] = useState({ ready: false});

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      temperatureFeelsLike: Math.round(response.data.temperature.feels_like),
      description: response.data.condition.description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      iconUrl: response.data.condition.icon_url,
    });
    
  }

  if (weatherData.ready) {
    return (
      <div className="City">
        <form>
          <input type="text" placeholder="Enter city" className="search" />
          <input type="submit" value="Search" className="submit" />
          <input type="submit" value="Current" className="current" />
        </form>

        <div className="row">
          <div className="col-sm-4">
            <div className="current-city-temp">
              <div className="city-data">
                <FontAwesomeIcon icon={faMapPin} />
                <span className="current-city"> {weatherData.city}</span>
                <div>
                  <span className="current-month">September</span>
                  <span className="current-date"> 10</span> <br />
                  <div className="current-day">Saturday</div>
                </div>
              </div>
              <div className="current-temp">
                <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
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
            <div className="current-icon">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </div>
            <div className="weather-description">
              {" "}
              {weatherData.description}
            </div>
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
                  <span className="humidity-value">
                    {" "}
                    {weatherData.humidity}
                  </span>
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "31bftf2499ef7004af95426acdf6a3oe";
    let city = "Kyiv";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
