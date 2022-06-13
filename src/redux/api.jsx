import axios from 'axios'

//const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=2a49197d`

export const fetchMovies = async (movieName) => axios.get(`${API_ENDPOINT}&s=${movieName}`)

export const fetchMovie = async (movieId) => {

    console.log('fetchMovie', `${API_ENDPOINT}&s=${movieId}`)

    return axios.get(`${API_ENDPOINT}&i=${movieId}`)
}