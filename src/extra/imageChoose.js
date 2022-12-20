import clear from "../images/weather-icons/clear.svg";
import drizzle from "../images/weather-icons/drizzle.svg";
import fog from "../images/weather-icons/fog.svg";
import mostlycloudy from "../images/weather-icons/mostlycloudy.svg";
import rain from "../images/weather-icons/rain.svg";
import snow from "../images/weather-icons/snow.svg";
import storm from "../images/weather-icons/storm.svg";
import unknown from "../images/weather-icons/unknown.svg";

export const imageChooser = (value, className) => {
  let image;
  if (value === "Thunderstorm") {
    image = storm;
  } else if (value === "Drizzle") {
    image = drizzle;
  } else if (value === "Rain") {
    image = rain;
  } else if (value === "Snow") {
    image = snow;
  } else if (value === "Clouds") {
    image = mostlycloudy;
  } else if (value === "Clear") {
    image = clear;
  } else if (value === "Fog") {
    image = fog;
  } else image = unknown;
  console.log("TEST", image.toString());
  return <img className={className} src={image} alt={"aaa"} />;
};
