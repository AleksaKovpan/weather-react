import React from "react";

export default function WeatherTemperature(props) {
     return (
      <span className="WeatherTemperature">
        <span className="current-temp-value"> {props.celsius}</span>
        <span className="unit">
          °C 
        </span>
        <div className="current-temp-value-feeling">
          feels like{" "}
          <span className="temp-value-feeling">{props.celsiusFeelsLike}</span>°
        </div>
      </span>
      
    );
  }

