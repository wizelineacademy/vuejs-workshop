import Vue from 'vue'
import Vuex from 'vuex'
import MovieService  from '../services/MovieService'

Vue.use(Vuex)

const store = {
  state: {
    hello: 'world',
    movies: [],
    genres: [],
    selectedGenre: null
  },

  actions: {
    async fetchMovies (context) {
      const response = await MovieService.getMovies({
        page: 1,
        genre: context.state.selectedGenre
      })
      context.commit('setMovies', response.data)
    },
    async fetchGenres (context) {
      const response = await MovieService.getGenres()
      context.commit('setGenres', response.data)
    },
    fetchByGenre(context, genre) {
      context.commit('setSelectedGenre', genre)
      context.dispatch('fetchMovies')
    }
  },

  mutations: {
    setMovies(state, moviesData) {
      state.movies = moviesData.results
    },
    setGenres(state, genresData) {
      state.genres = genresData.genres
    },
    setSelectedGenre(state, genre) {
      state.selectedGenre = genre
    }
  },

  getters: {
    movieCards (state) {
      const imageBasePath = 'http://image.tmdb.org/t/p/w370_and_h556_bestv2'
      return state.movies.map(movie => ({
        id: movie.id,
        title: movie.title,
        description: movie.description,
        image: `${imageBasePath}${movie.poster_path}`,
        voteAverage: movie.vote_average
      }))
    },
    selectedGenreName (state) {
      const genre = state.genres.filter(genre => genre.id === state.selectedGenre)
      return genre[0] ? genre[0].name : null
    }
  }
}

export default new Vuex.Store(store)
