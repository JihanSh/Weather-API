import { useState } from "react";

function FindWeather({ fetchWeather }) {
  const [city, setCity] = useState("");

  const fetchWeatherHandler = () => {
    fetchWeather(city);
  };

  return (
    <div className="header">
      <input
        type="text"
        className="country"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherHandler}>Find Weather</button>
    </div>
  );
}

export default FindWeather;
