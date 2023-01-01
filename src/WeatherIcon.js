import React from "react";

export default function WeatherIcon(props) {
  const animatedIcons = require.context(`./icons`, true);

  return (
    <div className="weatherIcon">
      <img
        src={animatedIcons(`./${props.code}.svg`)}
        alt={props.description}
        width={props.size}
      />
    </div>
  );
}