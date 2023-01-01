import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="current-temp-value"> {props.celsius}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={convertToFahrenheit} className="changeUnit">
            °F
          </a>
        </span>
        <div className="current-temp-value-feeling">
          feels like{" "}
          <span className="temp-value-feeling">{props.celsiusFeelsLike}</span>°
        </div>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <span className="WeatherTemperature">
        <span className="current-temp-value"> {Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius} className="changeUnit">
            °C
          </a>{" "}
          | °F
        </span>
        <div className="current-temp-value-feeling">
          feels like{" "}
          <span className="temp-value-feeling">{props.celsiusFeelsLike}</span>°
        </div>
      </span>
    );
  }
}
