<template>
  <div>

    <div class="container">
      <h1>My movies backlog</h1>
    </div>

    <movie-nav/>

    <div class="container">

      <movie-filter v-if="section==='discover'"/>

      <div :class="{'row': true, 'movie-container':true, 'loading':loading}">

        <div v-if="movies.length===0">
          <h3>There are no movies</h3>
        </div>

        <div
          class="col-xs-12 col-sm-6 col-lg-3"
          v-for="movie in movies"
          :key="movie.id" >
          <movie-card v-bind="movie" />
        </div>

      </div>

      <pagination v-if="section==='discover'"/>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import MovieCard from './MovieCard'
import MovieNav from './MovieNav'
import Pagination from './Pagination'
import MovieFilter from './MovieFilter'

export default {
  components: {
    MovieCard,
    MovieNav,
    Pagination,
    MovieFilter
  },

  mounted () {
    this.fetchGenres()
    this.fetchMovies()
    this.fetchSavedMovies()
  },

  computed: {
    ...mapState(['section', 'loading']),
    ...mapGetters({
      movies: 'movieCards'
    })
  },

  methods: {
    ...mapActions(['fetchGenres', 'fetchMovies', 'fetchSavedMovies'])
  }
}
</script>

<style scoped>
.movie-container {
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 0.3s opacity;
}

.loading{
  opacity: 0.2;
}
</style>
