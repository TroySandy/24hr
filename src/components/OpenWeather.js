import { useEffect, useState } from "react";
import { Card, CardText, CardBody, Button } from "reactstrap";
import './OpenWeather.css'
import Nasa from "./Nasa";

function getDirection(angle) { //add north by northwest.... with function stops below...
  var directions = [
    "North",
    'North by East',
    'North Northeast',
    'Northeast by North',
    'Northeast',
    'Northeast by East',
    'East-Northeast',
    'East by North',
    'East',
    'East by South',
    'East-Southeast',
    'SouthEast by East',
    'Southeast',
    'Southeast by South',
    'South-Southeast',
    'South by East',
    'South',
    'South by West',
    'South-Southwest',
    'Southwest by South',
    'Southwest',
    'Southwest by West',
    'West-Southwest',
    'West by South',
    'West',
    'West by North',
    'West-Northwest',
    'Northwest by West',
    'Northwest',
    'Northwest by North',
    'North-Northwest',
    'North by West'
  ];
  return directions[
    Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 11.25) % 32
  ];
}

function tempCelcius(f) {
  return (f - 32) * (5 / 9);
}
function windKph(windMph) {
  return (windMph * 1.60934)
}

function OpenWeather(props) {
  let apiKey = "e6d5c52c7e69d99580386764c2a09e6d";
  let apiUrl = `//api.openweathermap.org/data/2.5/weather?units=imperial&lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}`;

  let [temperature, setTemperature] = useState(0);
  let [tempToggle, setTempToggle] = useState(false);
  let [windToggle, setWindToggle] = useState(false);
  let [city, setCity] = useState("");
  let [windSpd, setWindSpd] = useState("");
  let [windDir, setWindDir] = useState("");

  useEffect(() => {
    // console.log(apiUrl);
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
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
      <Card id='Card'>
        <Nasa latitude={props.latitude} longitude={props.longitude} />
        <CardBody>
          <CardText> The weather is currently{" "}
              {tempToggle ? tempCelcius(temperature).toFixed(2) : temperature}&deg;{tempToggle ? "C" : "F"} in {city}. The wind is currently blowing {windToggle ? windKph(windSpd).toFixed(2) : windSpd} MPH from the {windDir}</CardText>
              
          <Button outline color='info' size='lg' onClick={() => setTempToggle(!tempToggle)}>
            Toggle C/F
          </Button>
          <Button outline color='info' size='lg' onClick={() => setWindToggle(!windToggle)}>
            Toggle MPH/KPH
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default OpenWeather;