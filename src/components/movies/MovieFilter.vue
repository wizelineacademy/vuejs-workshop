<template>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle"
      type="button"
      @click="open=!open">
      {{filterText}}
    </button>
    <div :class="{'dropdown-menu':true, 'show':open}">
      <a class="dropdown-item" href="#"
        @click.prevent="onFilterClick()">
        No filter
      </a>
      <a class="dropdown-item" v-for="genre in genres"
        :key="genre.id" href="#"
        @click.prevent="onFilterClick(genre.id)">
        {{genre.name}}
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      open: false
    }
  },

  computed: {
    ...mapState(['genres', 'selectedGenre']),
    ...mapGetters(['selectedGenreName']),
    filterText () {
      return this.selectedGenreName || 'Viewing all genres'
    }
  },

  methods: {
    ...mapActions(['filterByGenre']),
    onFilterClick (genre) {
      this.filterByGenre(genre)
      this.open = false
    }
  }
}
</script>


<style scoped>
.dropdown {
  margin-top: 20px;
}
</style>
