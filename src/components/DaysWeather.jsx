import MostlyCloudy from "../images/weather-icons/mostlycloudy.svg";
import Clear from "../images/weather-icons/clear.svg"
function DaysWeather() {
  return (
    <div className="days">
      <div className="time">
        <p>
          03:00 <br />
          <br />
          <img src={MostlyCloudy} className="w1" />
          <br />
          <br /> 8&deg;
        </p>
        <p>
          06:00 <br />
          <br />
          <img src={MostlyCloudy} className="w1" />
          <br />
          <br /> 9&deg;
        </p>
        <p>
          09:00 <br />
          <br />
          <img src={Clear} className="w1" />
          <br />
          <br /> 14&deg;
        </p>
        <p>
          12:00 <br />
          <br />
          <img src={Clear} className="w1" />
          <br />
          <br /> 17&deg;
        </p>
        <p>
          15:00 <br />
          <br />
          <img src={Clear} className="w1" />
          <br />
          <br /> 18&deg;
        </p>
        <p>
          18:00 <br />
          <br />
          <img src={Clear} className="w1" />
          <br />
          <br /> 16&deg;
        </p>
        <p>
          20:00 <br />
          <br />
          <img src={MostlyCloudy} className="w1" />
          <br />
          <br /> 13&deg;
        </p>
      </div>
    </div>
  );
}
export default DaysWeather;
