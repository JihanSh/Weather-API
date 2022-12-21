import axios from "axios";
import { useState } from "react";
import "./App.css";

import FindWeather from "./components/FindWeather";
import WeatherDisplay from "./components/WeatherDisplay";
import HourlyWeatherList from "./components/HourlyWeatherList";

function App() {
  const [response, setResponse] = useState();

  const fetchWeather = async (city) => {
    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=8b0085fe50c89792c823f75df807415e`
      )
      .then((response) => {
        setResponse(response.data);
      });
  };

  return (
    <div className="main">
      <FindWeather fetchWeather={fetchWeather} />
      <WeatherDisplay response={response} />
      <HourlyWeatherList response={response} />
    </div>
  );
}

export default App;
