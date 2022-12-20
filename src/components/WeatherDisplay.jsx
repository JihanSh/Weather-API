import CloudyWeather from "../images/weather-icons/mostlycloudy.svg";
function WeatherDisplay() {
  return (
    <div className="body">
      <img src={CloudyWeather} className="weather" />
      <br></br>
      <h3>overcast clouds</h3>
      <br></br>
      <br></br>
      <h2>Temperature &nbsp;&nbsp; 10&deg; to 11&deg;</h2>
      <br></br>
      <h4>Humidity &nbsp; 78%" &nbsp;&nbsp;&nbsp; Pressure &nbsp;1008.48</h4>
 

     
   
    </div>
  );
}
export default WeatherDisplay;
