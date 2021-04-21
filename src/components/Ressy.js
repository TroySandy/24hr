import React, {useState, useEffect} from 'react';



function Ressy(props) {
  const [lat, setLat] = useState('');
  const [long, setLong]  = useState('');

  fetch(`https://resy.p.rapidapi.com/4/find?lat=${props.latitude}&long=${props.longitude}&day=2021-02-14&party_size=2&offset=0`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "df1dbfa139msh6eb321abc3168ddp1805d9jsn668e26b5df16",
      "x-rapidapi-host": "resy.p.rapidapi.com"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
  return <div></div>;
}

export default Ressy;
