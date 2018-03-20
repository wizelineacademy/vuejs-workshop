<template>
  <li class="nav-item" :class="{'active': isActive}">
    <router-link class="nav-link" :to="to">
      {{label}}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },

  computed: {
    isActive() {
      return this.$route.path === this.to
    }
  }
}
</script>
