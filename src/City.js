import React, { useState } from "react";
import "./City.css";

import axios from "axios";


import WeatherInfo from "./WeatherInfo"
export default function City() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(null);

  function handleResponse(response) {
      setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      temperatureFeelsLike: Math.round(response.data.temperature.feels_like),
      description: response.data.condition.description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: new Date(),
    });
  }

  function search() {
    const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let city = "Lviv";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for a city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="City">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city"
            className="search"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="submit" />
          <input type="submit" value="Current" className="current" />
        </form>

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
