import HourlyWeather from "./HourlyWeather";

function HourlyWeatherList({ response }) {
  return (
    <div className="days">
      <div className="time">
        {response &&
          response.list.map(
            (el, index) => index > 0 && <HourlyWeather response={el} />
          )}
      </div>
    </div>
  );
}
export default HourlyWeatherList;
