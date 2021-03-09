import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../request'
import '../css/banner.css'

const base_url='https://image.tmdb.org/t/p/w500'

function Banner() {
const [movie,setMovie]=useState([]);

const fetchBanner = async () => {
    const request = await axios.get(requests.fetchNetflixOrginals)

  setMovie(request.data.results[
      Math.floor(Math.random() * request.data.results.length - 1)
           
  ])
 

}

console.log(movie)


useEffect( () => {
   fetchBanner()
   
},[])

    return (
        <header className="banner"
        style={{
            backgroundSize:'cover',
            backgroundImage:`url(
            "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
            )`
        }}
        
        >
         <div className="banner_content">
             <h1> {movie?.title || movie?.name || movie?.orignal_name} </h1>
             <div className="twoBtn">
                <button className="banner__btn"> play  </button>
                <button className="banner__btn"> My list  </button>
             </div>

             <p className="banner__description">
                 {movie?.overview}
             </p>

         
         </div>
         <div className="banner--fadein">
                
                </div>
       </header>
    )
}

export default Banner
