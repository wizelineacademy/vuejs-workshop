import axios from 'axios'

const url = process.env.MOVIES_URL
const key = process.env.API_KEY

export default {
  getMovies (queryObj) {
    const d = new Date();
    // get movies sorted by popularity
    let query = '/discover/movie?sort_by=popularity.desc'
    query += `&page=${queryObj.page}`
    // with selected genre filter
    const genreQuery = queryObj.genre ? `&with_genres=${queryObj.genre}` : ''
    query += genreQuery
    // from two months ago
    query += `&primary_release_date.gte=${d.getFullYear()}-${d.getMonth() - 1}-${d.getDate()}`
    // until now
    query += `&primary_release_date.lte=${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`

    // everything together including the api key
    const request = `${url}${query}&api_key=${key}`

    return axios.get(request)
  },

  getGenres () {
    let query = '/genre/movie/list'
    const request = `${url}${query}?api_key=${key}`
    return axios.get(request)
  }
}
