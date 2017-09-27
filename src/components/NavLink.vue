<template>
  <li :class="{'nav-item': true, 'active': currentRoute===to}"
    @click="$emit('click', event)">
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
    currentRoute () {
      return this.$route.path
    }
  }
}
</script>
