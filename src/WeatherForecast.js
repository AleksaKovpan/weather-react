import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";



export default function WeatherForecast(props) {
    const apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    let forecastIcon = props.data.icon;
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tuesday</div>
          <WeatherIcon code={forecastIcon} size={52} />
          <div className="WeatherForecast-temperature">8°</div>
        </div>
      </div>
    </div>
  );
}
