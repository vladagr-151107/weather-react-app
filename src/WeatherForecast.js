import axios from "axios";
import React from "react";
import "./App.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "e43d0522c6a2b491f8bte6b227o4172b";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.lantitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-day">${props.date.time}</div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
            alt=""
            width="80"
          />
          <div classname="forecast-temperatures">
            <span className="forecast-temp-max">${Math.round(19.5)}°C</span> /
            <span className="forecast-temp-min">${Math.round(10.3)}°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
