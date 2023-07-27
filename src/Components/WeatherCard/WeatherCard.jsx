import React from "react";
import "./WeatherCard.css";

const WeatherCard = (props) => {
  const iconURL = "https://openweathermap.org/img/wn/" + props.icon + "@2x.png";
  return (
    <div className="card">
      <p className="city">
        {props.CityName}
        {<sup className="h2country">{props.country}</sup>}
      </p>
      <h1 className="weather">{props.weatherInfo}</h1>
      <img className="WeatherIcon" src={iconURL} alt="" />
      <p className="temp">{(props.weatherTemp - 273.15).toFixed(2)}°C</p>
      <div className="WeatherDetails">
        <div className="minDIv">
          <p className="minHeading">Min</p>
          <p className="minTemp">{(props.minTemp - 273.15).toFixed(2)}°</p>
        </div>
        <div className="maxDiv">
          <p className="minHeading">Max</p>
          <p className="minTemp">{(props.maxTemp - 273.15).toFixed(2)}°</p>
        </div>
        <div className="humidityDiv">
          <p className="minHeading">Humidity</p>
          <p className="minTemp">{props.humidity + "%"}</p>
        </div>
        <div className="windSpeedDiv">
          <p className="minHeading">WindSpeed</p>
          <p className="minTemp">
            {props.windSpeed}
            {<sup className="windSpeedSup">KM/h</sup>}
          </p>
        </div>
        <div className="feelsLike">
        <p className="minHeading">Feels Like</p>
        <p className="minTemp">{(props.feelsLike - 273.15).toFixed(2)}°</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
