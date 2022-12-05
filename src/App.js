import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import axios from 'axios';
import "./App.css";
//https://api.nasa.gov/planetary/apod?api_key=OX73QYdPNAYcYXP2nF9IsEc4VbMT3GF6mxUxRH23*//

import PhotoOTD from './Components/PhotoOTD';

function App() {
  const [data, setData] = useState();

  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=OX73QYdPNAYcYXP2nF9IsEc4VbMT3GF6mxUxRH23')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    
    <div className="App">
      { data &&<PhotoOTD photo={data} />}
    </div>
  );
}

export default App;
