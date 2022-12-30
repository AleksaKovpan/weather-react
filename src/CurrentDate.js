import React from "react";

export default function CurrentDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  let date = props.date.getDate();
  let day = days[props.date.getDay()];
  return (
    <div>
      <span className="current-month">{month}</span>
      <span className="current-date"> {date}</span> <br />
      <div className="current-day"> {day}</div>
    </div>
  );
}
