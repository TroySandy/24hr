import logo from "./logo.svg";
import "./App.css";
import Nasa from "./components/Nasa";
import OpenWeather from "./components/OpenWeather";
//import Ressy from "./components/Ressy";
import { useState } from "react";

function App() {
  let [longitude, setLongitude] = useState("-86.15");
  let [latitude, setLatitude] = useState("39.76");
  let [coordinates, setCoordinates] = useState("")
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    },
    () => {
      //Error - couldn't get location
      setLongitude(-86.15);
      setLatitude(39.76);
    }
  );

  return (
    <div className="App">
      <Nasa latitude={latitude} longitude={longitude} />
      <OpenWeather latitude={latitude} longitude={longitude} />
    </div>
  );
}

export default App;
