import React from "react";
import "./Weather.css";
import City from "./City";
import Footer from "./Footer";

export default function Weather() {
  return (
    <div className="Weather">
      <div class="conteiner">
        <div class="wrapper">
         
          <City />
        </div>
        <Footer />
      </div>
    </div>
  );
}

// import axios from "axios";
// import { Audio } from "react-loader-spinner";
// export default function Weather() {
//   function handleResponse(response) {
//     alert(`The weather in Kyiv is ${Math.round(response.data.main.temp)}°C`);
//   }
//   let apiKey = "9219390dd657b91d9e5236012585e598";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(handleResponse);
//   return (
//     <Audio
//       height="80"
//       width="80"
//       radius="9"
//       color="green"
//       ariaLabel="three-dots-loading"
//       wrapperStyle
//       wrapperClass
//     />
//   );
// }
