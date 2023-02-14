import React from "react";

export default function WeatherForecastDay(props) {
  let iconLink = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.description.icon}.png`;
  function day() {
    let date = new Date(props.date.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <img src={iconLink} alt="" width="80" />
      <div classname="forecast-temperatures">
        <span className="forecast-temp-max">
          {Math.round(props.temperature.maximum)}C
        </span>{" "}
        /
        <span className="forecast-temp-min">
          {Math.round(props.tewmperature.minimum)}C
        </span>
      </div>
    </div>
  );
}
