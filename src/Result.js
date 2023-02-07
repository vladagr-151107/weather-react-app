import React from "react";
import "./App.css";

export default function Result(props) {
  let iconLink = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.result.icon}.png`;
  return (
    <div>
      <div className="overview">
        <h1> {props.result.city} </h1>
        <ul className="overview-weather">
          <li>
            <span> Wednesday, Feb 2 13:53</span>
          </li>
          <li>{props.result.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={iconLink} alt="description" />
            <div className="float-left">
              <strong id="temperature">
                {" "}
                {Math.round(props.result.temperature)}
              </strong>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row-reverse">
          <div classname="col-6">
            <ul className="ul-hum-span">
              <li className="hum-span">
                Humidity: <span>{props.result.humidity}%</span>
              </li>
              <li className="hum-span">
                Wind: <span>{Math.round(props.result.wind)} km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
