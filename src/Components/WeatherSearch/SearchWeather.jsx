import React, { useEffect, useState } from "react";
import "./SearchWeather.css";
import axios from "axios";
import WeatherCard from "../WeatherCard/WeatherCard";

const SearchWeather = () => {
  // const city = useContext();
  // const cityTemp = useContext();
  const apiKey = "216138c74d3d18643fbd5cd27eb457f7";
  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState("");
  const getWeather = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((response) => {
        // handle success
        console.log("response", response);
        setData(response.data);
      })
      .catch((error) => {
        // handle error
        console.error("error", error);
      });
  };

  useEffect(() => {
    getWeather("delhi");
  }, []);

  const changeHandler = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  const handleSearch = () => {
    getWeather(inputCity);
  };

  return (
    <div className="mainDiv">
      <WeatherCard
        weatherTemp={data?.main?.temp}
        minTemp={data?.main?.temp_min}
        maxTemp={data?.main?.temp_max}
        CityName={data?.name}
      />
      <div className="searchBox">
        <h1>Search Your City </h1>
        <form className="form" onSubmit={submitHandler}>
          <input
            className="search-input"
            type="text"
            value={inputCity}
            onChange={changeHandler}
          />
          <button className="search" type="search" onClick={handleSearch}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchWeather;
