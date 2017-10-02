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

export default {
  data () {
    return {
      open: false,
      genres: [
        {name: 'Action', id: 1},
        {name: 'Horror', id: 2},
        {name: 'Comedy', id: 3},
      ],
      selectedGenreName: null
    }
  },

  computed: {
    filterText () {
      return this.selectedGenreName || 'Viewing all genres'
    }
  },

  methods: {
    onFilterClick (genre) {
      // TODO filter movies
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
