import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

 useEffect(() => {
   setLoaded(false);
 }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
   
     
    if (loaded) {
         return (
           <div className="WeatherForecast">
                 <div className="row">
                     {forecast.map(function (dailyForecast, index) {
                         return (
                           <div
                             className="col forecast-day-card p-1 my-2"
                             key={index}
                           >
                             <WeatherForecastDay data={dailyForecast} />
                           </div>
                         );   
                     } )}
               
             
             </div>
           </div>
         );
         
    } else {
       let apiKey = "31bftf2499ef7004af95426acdf6a3oe";
       let units = "metric";
       let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.longitude}&lat=${props.coordinates.latitude}&key=${apiKey}&units=${units}`;
       axios.get(apiUrl).then(handleResponse);
       return null;
    }
  
}
