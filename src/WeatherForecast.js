import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
    let [loaded, setloaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setloaded(true);
    }
   
     
    if (loaded) {
         return (
           <div className="WeatherForecast">
             <div className="row">
               <div className="col">
                 <WeatherForecastDay data={forecast[0]} />
               </div>
               <div className="col">
                 <WeatherForecastDay data={forecast[1]} />
               </div>
               <div className="col">
                 <WeatherForecastDay data={forecast[2]} />
               </div>
               <div className="col">
                 <WeatherForecastDay data={forecast[3]} />
               </div>
               <div className="col">
                 <WeatherForecastDay data={forecast[4]} />
               </div>
               {/* <div className="col">
                 <WeatherForecastDay data={forecast[5]} />
               </div> */}
             </div>
           </div>
         );
         
    } else {
       let apiKey = "31bftf2499ef7004af95426acdf6a3oe";
       let units = "metric";
       let currentLocationApiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${props.coordinates.longitude}&lat=${props.coordinates.latitude}&key=${apiKey}&units=${units}`;
       axios.get(currentLocationApiUrl).then(handleResponse);
       return null;
    }
  
}
