import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

function minTemperature() {
  let temperature = Math.round(props.data.temperature.minimum);
  return `${temperature}°`;
    }
    
    function maxTemperature() {
      let temperature = Math.round(props.data.temperature.maximum);
      return `${temperature}°`;
    }

      function forecastDay() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
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
        <div className="forecast-temperatures">
          <span className="forecast-temperature-min">{minTemperature()}</span>{".."}
          <span className="forecast-temperature-max">{maxTemperature()}</span>
        </div>
      </div>
    );
}