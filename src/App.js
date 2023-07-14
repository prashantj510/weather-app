import "./App.css";
import WeatherCard from "./Components/WeatherCard/WeatherCard";
import SearchWeather from "./Components/WeatherSearch/SearchWeather";

function App() {
  return (
    <div className="app">
    {/* <WeatherCard/> */}
    <SearchWeather/>
    </div>
  );
}

export default App;
