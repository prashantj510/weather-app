import React, { useEffect, useState, useCallback } from "react";
import "./SearchWeather.css";
import axios from "axios";
import WeatherCard from "../WeatherCard/WeatherCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchWeather = () => {
  const apiKey = "216138c74d3d18643fbd5cd27eb457f7";
  const [weather, setWeather] = useState(null);
  const [inputCity, setInputCity] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = useCallback(async (cityName) => {
    if (!cityName) return;
    try {
      setLoading(true);
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
      const response = await axios.get(apiURL);
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("City Name Not Found!");
    }
  }, [apiKey]);

  // Fetch default weather on component mount
  useEffect(() => {
    getWeather("delhi");
  }, [getWeather]);

  const handleInputChange = (e) => setInputCity(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      getWeather(inputCity);
      setInputCity("");
    }
  };

  return (
    <div className="searchDiv">
      <div>
        <div className="mainDiv">
          <WeatherCard
            weatherTemp={weather?.main?.temp}
            minTemp={weather?.main?.temp_min}
            maxTemp={weather?.main?.temp_max}
            CityName={weather?.name}
            weatherInfo={weather?.weather[0]?.main}
            icon={weather?.weather[0]?.icon}
            country={weather?.sys?.country}
            humidity={weather?.main?.humidity}
            windSpeed={weather?.wind?.speed}
            feelsLike={weather?.main?.feels_like}
            isLoading={loading}  // pass the loading state to WeatherCard
          />
        </div>

        <form className="form" onSubmit={handleSearch}>
          <div className="input-wrapper">
            <button className="icon" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="25px"
                width="25px"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="#fff"
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="#fff"
                  d="M22 22L20 20"
                ></path>
              </svg>
            </button>
            <input
              placeholder="Search Your City..."
              className="input"
              name="text"
              type="text"
              value={inputCity}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
};

export default SearchWeather;
