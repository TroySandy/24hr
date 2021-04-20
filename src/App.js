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
  
  setCoordinates(navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
  }))

  

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
<<<<<<< HEAD
      <OpenWeather />
      <button></button>
=======
      <OpenWeather latitude={latitude} longitude={longitude} />
      <Ressy />
>>>>>>> 55fe3358fbd9208a519a5b7b1db2512c0ea458d2
    </div>
  );
}

export default App;
