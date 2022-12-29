import React, { useState } from "react";
import "./City.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureThreeQuarters } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import CurrentDate from "./CurrentDate";

export default function City() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      temperatureFeelsLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: new Date(response.data.dt * 1000),
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
                  <CurrentDate date={weatherData.date} />
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
              <img src={weatherData.icon} alt={weatherData.description} />
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
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let city = "Paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
