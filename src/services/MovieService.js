import axios from 'axios'
import moment from 'moment'

const url = process.env.MOVIES_URL
const key = process.env.API_KEY

export default {
  getMovies (queryObj) {
    const twoMontsAgo = moment().subtract(2, 'month')

    // get movies sorted by popularity
    // with selected genre filter
    // from two months ago
    const query = {
      'api_key': key,
      'sort_by': 'popularity.desc',
      'with_genres': queryObj.genre,
      'primary_release_date.gte': twoMontsAgo.format('YY-MM-DD')
    }

    return axios.get(`${url}/discover/movie`, {params: query})
  },

  getGenres () {
    let query = '/genre/movie/list'
    const request = `${url}${query}?api_key=${key}`
    return axios.get(request)
  }
}
