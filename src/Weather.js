import React from "react";
import axios from "axios";
export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in Kyiv is ${Math.round(response.data.main.temp)}°C`);
  }
  let apiKey = "9219390dd657b91d9e5236012585e598";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <div>Weather</div>;
}
