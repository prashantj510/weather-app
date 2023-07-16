import React from "react";
import "./WeatherCard.css";

const WeatherCard = (props) => {
  return (
    <div className="card">
      <p className="city">{props.CityName}</p>

      <p className="temp">{(props.weatherTemp - 273.15).toFixed(2)}°C</p>
      <div className="minmaxContainer">
        <div className="min">
          <p className="minHeading">Min</p>
          <p className="minTemp">{(props.minTemp - 273.15).toFixed(2)}°</p>
        </div>
        <div className="max">
          <p className="maxHeading">Max</p>
          <p className="maxTemp">{(props.maxTemp - 273.15).toFixed(2)}°</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
