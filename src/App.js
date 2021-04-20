import logo from "./logo.svg";
import "./App.css";
import Nasa from "./components/Nasa";
import OpenWeather from "./components/OpenWeather";
//import Ressy from "./components/Ressy";
import { useState } from "react";

function App() {
  let [longitude, setLongitude] = useState(0);
  let [latitude, setLatitude] = useState(0);

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
      console.log(position.coords.longitude);
      console.log(position.coords.latitude);
    },
    () => {
      //Error - couldn't get location
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
