import { imageChooser } from "../extra/imageChoose";

function WeatherDisplay({ response }) {
  const res = response && response.list[0];

  return (
    <div className="body">
      {console.log(res)}
      {res && (
        <div>
          {imageChooser(res.weather[0].main, "weather")}
          <h3>{res.weather[0].description}</h3>
          <h2>{`Temperature ${(res.main.temp_min + 273.15).toFixed(1)}K to ${(
            res.main.temp_max + 273.15
          ).toFixed(1)}K`}</h2>
          <h4>{`Humidity ${res.main.humidity}%    Pressure ${res.main.pressure}`}</h4>
        </div>
      )}
    </div>
  );
}
export default WeatherDisplay;
