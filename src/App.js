import "./App.css";

import FindWeather from "./components/FindWeather";
import WeatherDisplay from "./components/WeatherDisplay";
import DaysWeather from "./components/DaysWeather";

function App() {
  return (
    <div>
    <FindWeather/>
    <WeatherDisplay/>
    <DaysWeather/>
   </div>
  );
}

export default App;
