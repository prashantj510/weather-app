import React, { useEffect, useState } from "react";
import "./SearchWeather.css";
import axios from "axios";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./loading.css";
import Loader from "./Loader";

const SearchWeather = () => {
  const apiKey = "216138c74d3d18643fbd5cd27eb457f7";
  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState("");
  const [loading, setLoading] = useState(false);
  const getWeather = (cityName) => {
    if (!cityName) return;
    try {
      setLoading(true);
      const apiURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=" +
        apiKey;
      axios.get(apiURL).then((response) => {
        // handle success
        console.log("response", response.data.weather);
        setData(response.data);
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("error", error);
    }
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
    setInputCity("");
  };
  const handleSearch = () => {
    getWeather(inputCity);
  };

  return (
    <div className="searchDiv">
      {/* <Loader/> */}
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="mainDiv">
              <WeatherCard
                weatherTemp={data?.main?.temp}
                minTemp={data?.main?.temp_min}
                maxTemp={data?.main?.temp_max}
                CityName={data?.name}
              />
            </div>
            <form className="form" onSubmit={submitHandler}>
              <div className="input-wrapper">
                <button className="icon" onClick={handleSearch} type="search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="25px"
                    width="25px"
                  >
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      stroke="#fff"
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    ></path>
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      stroke="#fff"
                      d="M22 22L20 20"
                    ></path>
                  </svg>
                </button>
                <input
                  placeholder="Search Your City.."
                  className="input"
                  name="text"
                  type="text"
                  value={inputCity}
                  onChange={changeHandler}
                />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchWeather;
