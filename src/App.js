import logo from "./logo.svg";
import "./App.css";
import Nasa from "./components/Nasa";
import OpenWeather from "./components/OpenWeather";
//import Ressy from "./components/Ressy";
import { useState } from "react";

function App() {
  let [longitude, setLongitude] = useState("");
  let [latitude, setLatitude] = useState("");

  return (
    <div className="App">
      <Nasa />
      <OpenWeather />
      {/* <Ressy /> */}
    </div>
  );
}

export default App;
