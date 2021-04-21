import "./App.css";
import OpenWeather from "./components/OpenWeather";
import {useState} from 'react';

function Display() {
    let [longitude, setLongitude] = useState(0);
  let [latitude, setLatitude] = useState(0);

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
      // console.log(position.coords.longitude);
      // console.log(position.coords.latitude);
    },
    () => {
      //Error - couldn't get location
    }
  );

  return(
    <div className='container-flex'>
    <OpenWeather latitude={latitude} longitude={longitude} />
  </div>
  )
}

export default Display;
