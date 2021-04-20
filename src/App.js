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

  

  return (
    <div className="App">
      <Nasa />
      <OpenWeather />
      <button></button>
    </div>
  );
}

export default App;
