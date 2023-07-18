import "./App.css";
import SearchWeather from "./Components/WeatherSearch/SearchWeather";
import { Player } from "@lottiefiles/react-lottie-player";

function App() {
  return (
    <div className="app">
      <Player
        src="https://lottie.host/2229970f-151d-4729-bb62-c82d9b12a64c/wkUlsKfbae.json"
        className="player"
        loop
        autoplay
        speed={1}
      />
      <SearchWeather />
    </div>
  );
}

export default App;
