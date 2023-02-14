import React from "react";
import "./App.css";

export default function WeatherTemperature(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  function fahrenheit() {
    return (props.temperature * 9) / 5 + 32;
  }
  if (props.unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong id="temperature"> {Math.round(props.temperature)}</strong>
        <span className="units">
          °C |
          <a className="unit-link" href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <strong id="temperature"> {Math.round(fahrenheit())}</strong>
        <span className="units">
          <a className="unit-link" href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
