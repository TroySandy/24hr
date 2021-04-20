import { useEffect, useState } from "react";
import { Button } from "reactstrap";

function getDirection(angle) {
  var directions = [
    "North",
    "North-West",
    "West",
    "South-West",
    "South",
    "South-East",
    "East",
    "North-East",
  ];
  return directions[
    Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8
  ];
}

function tempCelcius(f) {
  return (f - 32) * (5 / 9);
}

function OpenWeather(props) {
  let apiKey = "e6d5c52c7e69d99580386764c2a09e6d";
  let apiUrl = `//api.openweathermap.org/data/2.5/weather?units=imperial&lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}`;

  let [temperature, setTemperature] = useState(0);
  let [tempToggle, setTempToggle] = useState(false);
  let [city, setCity] = useState("");
  let [windSpd, setWindSpd] = useState("");
  let [windDir, setWindDir] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setTemperature(data.main.temp);
        setCity(data.name);
        setWindSpd(data.wind.speed);
        setWindDir(getDirection(data.wind.deg));
      });
  }, []);

  return (
    <div>
      <div id="temperature">
        The weather is currently{" "}
        {tempToggle ? tempCelcius(temperature).toFixed(2) : temperature}
        &deg;{tempToggle ? "C" : "F"} in {city}.
      </div>
      <div id="wind">
        The wind is {windSpd} MPH {windDir}
      </div>
      <Button onClick={() => setTempToggle(!tempToggle)}>Toggle Temp</Button>
    </div>
  );
}

export default OpenWeather;
