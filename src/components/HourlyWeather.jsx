import { imageChooser } from "../extra/imageChoose";
import MostlyCloudy from "../images/weather-icons/mostlycloudy.svg";

const HourlyWeather = ({ response }) => {
  return (
    <div>
      <p>{response.dt_txt.substring(10, 16)}</p>
      {imageChooser(response.weather[0].main, "w1")}
      <p>{`${response.main.temp}K`}</p>
    </div>
  );
};

export default HourlyWeather;
