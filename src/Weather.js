import "./weather.css";
import React from "react";

export default function Weather() {
  let weatherData = {
    city: "Hamburg",
    country: "DE",
    temperature: 14,
    date: "Friday | 10:00",
    description: "cloudy",
    feelsLike: 12,
    humidity: 80,
    wind: 60,
    image: "https://openweathermap.org/img/wn/02d@2x.png",
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="frameWrapper">
          <div className="frame">
            <form className="search-form mt-3">
              <div className="row">
                <div className="col-10">
                  <input
                    type="search"
                    placeholder="Enter city"
                    className="form-control"
                    autoComplete="off"
                    id="search-input"
                  />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    value="search"
                    className="btn submit-btn"
                  />
                </div>
              </div>
            </form>
            <h1>
              {weatherData.city}, {weatherData.country}
            </h1>
            <p className="date">{weatherData.date}</p>
            <div className="row current-weather-details">
              <div className="col-2">
                <img
                  src={weatherData.image}
                  alt=""
                  className="current-weather-icon"
                />
              </div>
              <div className="col-3">
                <span className="current-temp">{weatherData.temperature}</span>
                <span className="unit">°C</span>
              </div>
              <div className="col-7 weather-description">
                {weatherData.description}
              </div>
            </div>
            <div className="row weather-details">
              <div className="col-4 text-center">
                Feels like: {weatherData.feelsLike}°C
              </div>
              <div className="col-4 text-center">
                Humidity: {weatherData.humidity}%
              </div>
              <div className="col-4 text-center">
                Wind: {weatherData.wind} km/h
              </div>
            </div>
          </div>
          <footer>
            <a
              href="https://github.com/HamburgNinja/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            <span> by HamburgNinja</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
