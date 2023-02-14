import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";
import "./App.css";
export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Odesa");
  function showTemperature(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      temperature: response.data.temperature.current,
      data: new Date(response.data.time * 1000),
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
    let apiKey = "e43d0522c6a2b491f8bte6b227o4172b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="row">
                <div className="col-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="current-location"
                  >
                    Current{" "}
                  </button>
                </div>
                <div className="col-8">
                  <input
                    type="search"
                    onChange={updateCity}
                    placeholder="Search for a city"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <Result result={weatherData} />
          </div>
          <small>
            <a
              className="link"
              href="https://github.com/vladagr-151107/my-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a
              className="link"
              href="https://www.instagram.com/_princesska_1511_/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noreferrer"
            >
              Vlada Grushchenko
            </a>
          </small>
        </div>
      </div>
    );
  } else {
    search();
    return <div className="loading">Loading...</div>;
  }
}
