import React, { useState } from "react";
import "./City.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import { ColorRing } from "react-loader-spinner";
import WeatherForecast from "./WeatherForecast";

export default function City(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
      setWeatherData({
        ready: true,
        temperature: Math.round(response.data.temperature.current),
        temperatureFeelsLike: Math.round(response.data.temperature.feels_like),
        description: response.data.condition.description,
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.temperature.humidity,
        city: response.data.city,
        icon: response.data.condition.icon,
        date: new Date(),
      });
  }

  function search() {
    const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
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
            placeholder="Enter city..."
            className="search"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="submit" />
          <input type="submit" value="Current" className="current" />
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#fafafa", "#ffe9e3", "#c4c1e0", "#7c73e6"]}
      />
    );
  }
}
