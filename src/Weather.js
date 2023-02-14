import React, { useState } from "react";
import Result from "./Result";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Odesa");
  const [unit, setUnit] = useState("celsius");
  function showTemperature(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    onChange={updateCity}
                    placeholder="Search for a city"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <Result result={weatherData} unit={unit} setUnit={setUnit} />
            <WeatherForecast
              coordinates={weatherData.coordinates}
              unit={unit}
              setUnit={setUnit}
            />
          </div>
          <small>
            <a
              className="link"
              href="https://github.com/vladagr-151107/weather-react-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Vlada Grushchenko
          </small>
        </div>
      </div>
    );
  } else {
    search();
    return <div className="loading">Loading...</div>;
  }
}
