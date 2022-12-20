import axios from "axios";
import { useState } from "react";
import "./App.css";

import FindWeather from "./components/FindWeather";
import WeatherDisplay from "./components/WeatherDisplay";
import DaysWeather from "./components/DaysWeather";

function App() {
  const [response, setResponse] = useState([]);

  const fetchWeather = (city) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=8b0085fe50c89792c823f75df807415e`
      )
      .then((response) => {
        setResponse((prevState) => [...prevState, response.data]);
      });
  };

  return (
    <div className="main">
      <FindWeather fetchWeather={fetchWeather} />
      <WeatherDisplay response={response[0]} />
      <DaysWeather response={response[0]} />
    </div>
  );
}

export default App;
