import React from 'react'
import "./Posts.css"
import {API_KEY, imageUrl} from '../../constants/Constants'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import YouTube  from 'react-youtube'
function Posts(props) {
    const [movies,setMovies]=useState([])
   const [urlId,setUrlId]=useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovies(response.data.results)
        }).catch((err)=>{
            // alert(err);
        })
    })
      const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }
  const handleMovie=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
    }else{
      console.log("url not found or array empty")
    }
      })
  }
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
        {movies.map((obj)=>
       <img  onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster' }alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
)}
    </div>
   {urlId && <YouTube opts={opts} videoId={urlId.key}></YouTube>}
    </div>
  )
}

export default Posts