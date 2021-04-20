import React, {useState, useEffect} from 'react';

function Nasa(props) {
  
  const [ imageSrc, setImageSrc ] = useState('');
  
  const baseURL = '//api.nasa.gov/planetary/earth/imagery';
  const key = 'UhGFCeSsF7c3DLnKz50mppSxde9kpgUecJgXeMe9';
  
  const fetchResults = () => {
    let url = `${baseURL}?lon=${props.longitude.toFixed(2)}&lat=${props.latitude.toFixed(2)}&dim=0.75&api_key=${key}`;
    console.log(url);
    
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        let objURL= URL.createObjectURL(blob)  
        if(props.longitude !== 0 && props.latitude !== 0){
          setImageSrc(objURL)
        }
      })
      .catch(err => console.log(err))
  }
  useEffect (() => {
    fetchResults()
  }, [props.latitude])

  return ( 

  <div className="main">
    <div className="mainDiv">
      <img src={imageSrc} width="400px" height="400px"/>
    </div>
  </div>
  )
}

export default Nasa;
