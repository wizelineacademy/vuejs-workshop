import Vue from 'vue'
import Vuex from 'vuex'
import { getCookie, setCookie } from 'tiny-cookie';
import MovieService from '../services/MovieService'

Vue.use(Vuex)

// cookies json transformer utilities
const getJSON = (key) => getCookie(key, JSON.parse);
const setJSON = (key, value, options) => setCookie(key, value, JSON.stringify, options);

// API constants
const url = process.env.MOVIES_URL
const key = process.env.API_KEY

export default new Vuex.Store({
  state: {
    currentPage: 1,
    pages: 1,
    movieList: [],
    savedMovies: [],
    genres: [],
    selectedGenre: null,
    section: 'discover',
    loading: false
  },

  actions: {
    async fetchMovies (context, page = 1) {
      context.commit('setLoading', true)
      const response = await MovieService.getMovies({
        page: page,
        genre: context.state.selectedGenre,
      })
      context.commit('setMovies', response.data)
      context.commit('setLoading', false)
    },
    async fetchGenres (context) {
      const response = await MovieService.getGenres()
      context.commit('setGenres', response.data.genres)
    },
    gotoPage (context, page) {
      context.dispatch('fetchMovies', page)
    },
    fetchSavedMovies (context) {
      context.commit('setSavedMovies', getJSON('savedMovies'))
    },
    filterByGenre (context, genre) {
      this.commit('setSelectedGenre', genre)
      context.dispatch('fetchMovies', 1)
    }
  },

  mutations: {
    setMovies (state, moviesData) {
      state.movieList = moviesData.results
      state.currentPage = moviesData.page
      state.pages = moviesData.total_pages
    },
    setSavedMovies (state, savedMovies) {
      state.savedMovies = savedMovies || []
    },
    setGenres (state, genres) {
      state.genres = genres
    },
    setLoading (state, value) {
      state.loading = value
    },
    setSelectedGenre (state, genre) {
      state.selectedGenre = genre
    },
    saveMovie (state, movie) {
      state.savedMovies.push(movie)
      setJSON('savedMovies', state.savedMovies)
    },
    removeSavedMovie (state, movie) {
      const movieIndex = this.getters.savedMoviesIds.indexOf(movie.id)
      if (movieIndex >= 0) {
        state.savedMovies.splice(movieIndex, 1)
      }
      setJSON('savedMovies', state.savedMovies)
    },
    gotoSection (state, section) {
      state.section = section
    }
  },

  getters: {
    savedMoviesIds (state) {
      if (!state.savedMovies)
        return []
      return state.savedMovies.map(movie => movie.id)
    },
    movieCards (state) {
      if (state.section === 'backlog')
        // show saved movies
        return state.savedMovies || []

      // show fetched movies
      const imageBasePath = 'http://image.tmdb.org/t/p/w370_and_h556_bestv2'
      return state.movieList.map(
        movie => ({
          id: movie.id,
          title: movie.title,
          description: movie.overview,
          image: imageBasePath + movie.poster_path,
          voteAverage: movie.vote_average
        })
      )
    },
    selectedGenreName (state) {
      const genre = state.genres.filter(genre => genre.id===state.selectedGenre)[0]
      return genre?genre.name:null
    }
  }
})

