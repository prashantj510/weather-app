import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ 
  weatherTemp, 
  minTemp, 
  maxTemp, 
  CityName, 
  weatherInfo, 
  icon, 
  country, 
  humidity, 
  windSpeed, 
  feelsLike, 
  isLoading 
}) => {
  const iconURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

  return (
    <div className="card">
      {isLoading ? (
        // Skeleton loader
        <div className="skeleton">
          <div className="skeleton-text" style={{ width: "70%", height: "3rem" }}></div>
          <div className="skeleton-temp" style={{ width: "60%", height: "3rem" }}></div>
          <div className="skeleton-icon" style={{ width: "170px", height: "170px" }}></div>
          <div className="WeatherDetails">
            <div className="detail-box skeleton-detail"></div>
            <div className="detail-box skeleton-detail"></div>
            <div className="detail-box skeleton-detail"></div>
            <div className="detail-box skeleton-detail"></div>
            <div className="detail-box skeleton-detail"></div>
          </div>
        </div>
      ) : (
        <>
          <p className="city">
            {CityName} <sup className="h2country">{country}</sup>
          </p>
          <h1 className="weather">{weatherInfo}</h1>
          <img className="WeatherIcon" src={iconURL} alt={weatherInfo} />
          <p className="temp">{(weatherTemp - 273.15).toFixed(2)}°C</p>
          <div className="WeatherDetails">
            <div className="minDIv detail-box">
              <p className="minHeading">Min</p>
              <p className="minTemp">{(minTemp - 273.15).toFixed(2)}°</p>
            </div>
            <div className="maxDiv detail-box">
              <p className="minHeading">Max</p>
              <p className="minTemp">{(maxTemp - 273.15).toFixed(2)}°</p>
            </div>
            <div className="humidityDiv detail-box">
              <p className="minHeading">Humidity</p>
              <p className="minTemp">{humidity + "%"}</p>
            </div>
            <div className="windSpeedDiv detail-box">
              <p className="minHeading">Wind Speed</p>
              <p className="minTemp">
                {windSpeed} <sup className="windSpeedSup">KM/h</sup>
              </p>
            </div>
            <div className="feelsLike detail-box">
              <p className="minHeading">Feels Like</p>
              <p className="minTemp">{(feelsLike - 273.15).toFixed(2)}°</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
