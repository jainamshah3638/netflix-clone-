
const API_KEY = '9a93da6c845b1229fb06d9294a5a76ff'

const requests = {
      fetchTRending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
      fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
      fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      fetchTActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
      fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
      fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
     
     }
export default requests;