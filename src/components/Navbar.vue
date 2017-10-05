<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">My first Vue app</a>

    <button class="navbar-toggler" @click="collapse=!collapse" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="{'collapse':collapse, 'navbar-collapse':true}">
      <ul class="navbar-nav">

        <navbar-link to="/" label="Home"/>

        <navbar-link to="/movies" label="Movies"/>

      </ul>
    </div>

  </nav>
</template>

<script>
import NavbarLink from './NavbarLink'
export default {
  components: {
    NavbarLink
  },
  data () {
    return {
      collapse: true
    }
  }
}
</script>
