import Vue from 'vue'
import Vuex from 'vuex'
import movieService  from '../services/MovieService'

Vue.use(Vuex)

const store = {
  state: {
    hello: 'world',
    movies: []
  },

  actions: {
    async fetchMovies (context) {
      const response = await MovieService.getMovies({
        page: 1,
        genre: null
      })
      context.commit('setMovies', response.data)
    }
  },

  mutations: {
    setMovies(state, moviesData) {
      state.movies = moviesData.results
    }
  },

  getters: {

  }
}

export default new Vuex.Store(store)
