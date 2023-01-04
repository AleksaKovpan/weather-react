import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

    function forecastTemperature() {
        let temperature = Math.round(props.data.temperature.day);
    return `${temperature}`;
}

    function forecastDay() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thuersday",
          "Friday",
          "Saturday",
        ];
        return days[day];
    }
    
    let forecastIcon = props.data.condition.icon;
    return (
      <div className="WeatherForecastDay">
        <div className="WeatherForecast-day">{forecastDay()}</div>
        <WeatherIcon code={forecastIcon} size={52} />
        <div className="WeatherForecast-temperature">
          {forecastTemperature()}°
        </div>
      </div>
    );
}