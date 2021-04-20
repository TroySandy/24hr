import React, {useState, useEffect} from 'react';

function Nasa(props) {

  const [ lat, setLat ] = useState('');
  const [ lon, setLon ] = useState('');
  const [ imageSrc, setImageSrc ] = useState('');
  const [ results, setResults ] = useState([]);
  
  const baseURL = '//api.nasa.gov/planetary/earth/imagery';
  const key = 'UhGFCeSsF7c3DLnKz50mppSxde9kpgUecJgXeMe9';
  
  const fetchResults = () => {
    let url = `${baseURL}?lon=-95.33&lat=29.78&dim=0.15&api_key=${key}`;
    
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        let objURL= URL.createObjectURL(blob)  
        setImageSrc(objURL)
      })
      .catch(err => console.log(err))
  }
  useEffect (() => {
    fetchResults()
  }, [])

  return ( 

  <div className="main">
    <div className="mainDiv">
      <img src={imageSrc} width="400px" height="400px"/>
    </div>
  </div>
  )
}

export default Nasa;
