import { imageChooser } from "../extra/imageChoose";

const HourlyWeather = ({ response }) => {
  return (
    <div className="hourly-weather">
      <p>{response.dt_txt.substring(10, 16)}</p>
      {imageChooser(response.weather[0].main, "w1")}
      <p>{`${response.main.temp}\u00b0C`}</p>
    </div>
  );
};

export default HourlyWeather;
