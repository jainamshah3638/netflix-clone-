import React, { useEffect, useState } from 'react'
import '../css/row.css'
import Loading from './Loading'
import axios from '../axios'
import YouTube from 'react-youtube';

const base_url='https://image.tmdb.org/t/p/w500'

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies]=useState([])
   
   
    const fetchData =  async() => {
    
    const request = await axios.get(fetchUrl)
    const {data} = request
 const {results}= data

 setMovies(results)
    }
    useEffect( () => {
    fetchData()
   
        
   },[fetchUrl]) 



       return (
           <>
           <div className="Row">

          
            <h2 className="Row__title"> {title}</h2>
            <div className ="row__posters ">
           {
               movies.map( (movie) => (
                   <img key={movie.id} className={`row__poster ${isLargeRow && 'row__posterLarge'}`} src={`${base_url}${ isLargeRow ? movie.poster_path :movie.backdrop_path  }`} alt={movie.name} />
               ))
           }
          
            </div>
             </div>
           </>

       )
   
   
    
}

export default Row
