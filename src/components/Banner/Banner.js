import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import {API_KEY,imageUrl} from "../../constants/Constants";
function Banner() {
  const [movie, setMovie] = useState()
  const [randomNumber,setRandomNumber]=useState((Math.floor(Math.random() * 20) + 1));

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 20) + 1);
  }, []);

  useEffect(()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US%27`).then((response)=>{
        setMovie(response.data.results[randomNumber])
        console.log(response.data.results)
      })
},[randomNumber]) 

  // main fun
  return (
    <div 
    style={{padding:'10px',backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}
    className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">{movie ? (movie.original_title || movie.original_name || movie.name) : ''}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
         {movie? movie.overview:""}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
}

export default Banner;
