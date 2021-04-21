import React, { useState, useEffect } from "react";
import { CardImg } from "reactstrap";

function Nasa(props) {
  const [imageSrc, setImageSrc] = useState("");

  const baseURL = "//api.nasa.gov/planetary/earth/imagery";
  const key = "UhGFCeSsF7c3DLnKz50mppSxde9kpgUecJgXeMe9";

  const fetchResults = () => {
    let url = `${baseURL}?lon=${props.longitude.toFixed(
      2
    )}&lat=${props.latitude.toFixed(2)}&date=2021-04-01&dim=0.2&api_key=${key}`;
    // console.log(url);

    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        let objURL = URL.createObjectURL(blob);
        if (props.longitude !== 0 && props.latitude !== 0) {
          setImageSrc(objURL);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchResults();
  }, [props.latitude]);

  return <CardImg src={imageSrc} alt="Nasa Location Pic" className="cardImg" />;

}

export default Nasa;
