import { useEffect, useState } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  Button,
  CardImgOverlay,
} from "reactstrap";
import "./OpenWeather.css";
import Nasa from "./Nasa";

function getDirection(angle) {
  //add north by northwest.... with function stops below...
  var directions = [
    "North",
    "North by East",
    "North Northeast",
    "Northeast by North",
    "Northeast",
    "Northeast by East",
    "East-Northeast",
    "East by North",
    "East",
    "East by South",
    "East-Southeast",
    "SouthEast by East",
    "Southeast",
    "Southeast by South",
    "South-Southeast",
    "South by East",
    "South",
    "South by West",
    "South-Southwest",
    "Southwest by South",
    "Southwest",
    "Southwest by West",
    "West-Southwest",
    "West by South",
    "West",
    "West by North",
    "West-Northwest",
    "Northwest by West",
    "Northwest",
    "Northwest by North",
    "North-Northwest",
    "North by West",
  ];
  return directions[
    Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 11.25) % 32
  ];
}

function tempCelcius(f) {
  return (f - 32) * (5 / 9);
}
function windKph(windMph) {
  return windMph * 1.60934;
}

function OpenWeather(props) {
  let [temperature, setTemperature] = useState(0);
  let [tempToggle, setTempToggle] = useState(false);
  let [windToggle, setWindToggle] = useState(false);
  let [city, setCity] = useState("");
  let [windSpd, setWindSpd] = useState("");
  let [windDir, setWindDir] = useState("");

  useEffect(() => {
    let apiKey = "e6d5c52c7e69d99580386764c2a09e6d";
    let apiUrl = `//api.openweathermap.org/data/2.5/weather?units=imperial&lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}`;

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
        console.log(data.wind.speed, data.wind.deg);
      });
  }, [props.latitude]);

  return (
    <div>
      <Card id="Card">
        <Nasa latitude={props.latitude} longitude={props.longitude} />

        <CardImgOverlay className="text">
          <CardTitle>
            <h1>Welcome to the Agents-of-Code 24hr Project</h1>
          </CardTitle>
          <CardText>
            {" "}
            The weather is currently{" "}
            {tempToggle ? tempCelcius(temperature).toFixed(2) : temperature}
            &deg;{tempToggle ? "C" : "F"} in {city}. The wind is currently
            blowing {windToggle ? windKph(windSpd).toFixed(2) : windSpd}{" "}
            {windToggle ? "KPH" : "MPH"} from the {windDir}
          </CardText>
          <div className="div row">
            <div className="col-xs">
              <Button
                outline
                color="info"
                size="lg"
                onClick={() => setTempToggle(!tempToggle)}
                className="button "
              >
               {tempToggle ? "Fahrenheit" : "Celcius"}
              </Button>
            </div>
            <div className="col-xs">
              <Button
                outline
                color="info"
                size="lg"
                onClick={() => setWindToggle(!windToggle)}
                className="button"
              >
               {windToggle ? "MPH" : "KPH"}
              </Button>
              <hr />
              <h6>
                Powered by 🚀<a href="https://api.nasa.gov/">NASA Earth API</a>{" "}
                &amp; ☁️
                <a href="https://openweathermap.org/">OpenWeather API</a>
              </h6>
            </div>
          </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
}

export default OpenWeather;
