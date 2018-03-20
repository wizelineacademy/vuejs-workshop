<template>
  <li :class="{'nav-item': true, 'active': false}">
    <a class="nav-link" :href="to">
      {{label}}
    </a>
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
  }
}
</script>
