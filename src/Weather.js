import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form className="mb-3">
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
                  placeholder="Search for a city"
                  className="form-control"
                  autoComplete="off"
                  autoFocus="on"
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
          <div className="overview">
            <h1> Odesa </h1>
            <ul className="overview-weather">
              <li>
                <span> Wednesday, Jan 11 13:53</span>
              </li>
              <li> Сlear</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                  alt="Clear"
                />
                <div className="float-left">
                  <strong id="temperature"> 2</strong>
                  <span className="units">°C</span>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row-reverse">
              <div classname="col-6">
                <ul className="ul-hum-span">
                  <li className="hum-span">
                    Humidity: <span></span>67%
                  </li>
                  <li className="hum-span">
                    Wind: <span></span>9 km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <small>
          <a
            href="https://github.com/vladagr-151107/vanilla-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>
          by{" "}
          <a
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
}
