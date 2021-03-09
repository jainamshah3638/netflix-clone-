import React,{useEffect, useState} from 'react'
import Row from './component/Row'
import request from './request'
import Banner from './component/Banner'
import './css/app.css'
import Nav from './component/Nav'
const App = () => {

    return (
       <div className="App">
  <Nav/>
    <Banner/>

      <Row 
      title='Netflix Originals'
       fetchUrl={request.fetchNetflixOrginals}
       isLargeRow={true}
       />
      <Row title='Trending Now' fetchUrl={request.fetchTRending}/>
      <Row title='Top Rated ' fetchUrl={request.fetchTopRated}/>
      <Row title='Action MOvie ' fetchUrl={request.fetchTActionMovies}/>
      <Row title='Comedy MOvie '  fetchUrl={request.fetchComedyMovies}/>
      <Row title='Horror MOvie'  fetchUrl={request.fetchHorrorMovies}/>
      <Row title='Romance MOvie '  fetchUrl={request.fetchRomanceMovies}/>
      
      {console.log(request.fetchVideoes)}
      
     
       </div>
    )
}

export default App;