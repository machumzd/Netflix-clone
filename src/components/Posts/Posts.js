import React from 'react'
import "./Posts.css"
import {imageUrl} from '../../constants/Constants'
import { useEffect,useState } from 'react'
import axios from '../../axios'
function Posts(props) {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)
        }).catch((err)=>{
            // alert(err);
        })
    })
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
        {movies.map((obj)=>
       <img className={props.isSmall ?'smallPoster':'poster' }alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
)}
    </div>
    </div>
  )
}

export default Posts