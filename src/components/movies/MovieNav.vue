<template>
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a :class="{'nav-link':true, 'active': section==='discover'}"
        href="#" @click.prevent="clicked('discover')">
        Discover
      </a>
    </li>

    <li class="nav-item">
      <a :class="{'nav-link':true, 'active': section==='backlog'}"
        href="#" @click.prevent="clicked('backlog')">
        Backlog
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    clicked (section) {
      this.$store.commit('setSection', section)
    }
  },

  computed: {
    section () {
      return this.$store.state.currentSection
    }
  }
}
</script>
