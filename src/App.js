import logo from "./logo.svg";
import "./App.css";
import Nasa from "./components/Nasa";
import OpenWeather from "./components/OpenWeather";
import Ressy from "./components/Ressy";
import { useState } from "react";

function App() {
  let [longitude, setLongitude] = useState("");
  let [latitude, setLatitude] = useState("");
  let [coordinates, setCoordinates] = useState("")
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    },
    () => {
      //Error - couldn't get location
    }
  );

  return (
    <div className="App">
      <Nasa />
      <OpenWeather latitude={latitude} longitude={longitude} />
      <Ressy />
    </div>
  );
}

export default App;
