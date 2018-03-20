<template>
  <div>

    <div class="container">
      <h1>My movies backlog</h1>
      <p>Hello {{message}}</p>
    </div>

    <movie-nav/>

    <div class="container">

      <movie-filter/>

      <div class="row movie-container" :class="{'loading': isLoading}">

        <div v-for="(movie, index) in movies"
          :key="index"
          class="col-xs-12 col-sm-6 col-lg-3">
          <movie-card v-bind="movie"/>
        </div>

      </div>

      <pagination />

    </div>
  </div>
</template>

<script>
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

  computed: {
    message () {
      return this.$store.state.hello
    },
    movies () {
      return this.$store.getters.movieCards
    },
    isLoading () {
      return this.$store.state.loading
    }
  },

  mounted () {
    this.$store.dispatch('fetchMovies')
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
