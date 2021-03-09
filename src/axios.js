import axios from 'axios'

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
     
});

// https://api.themoviedb.org/3/discover/movie?api_key=9a93da6c845b1229fb06d9294a5a76ff&language=en-US

export default instance;

