<template>
  <ul class="list-group">
    <li v-for="(item, index) in tasks"
      v-bind:key="index"
      class="list-group-item">
        <button @click="remove(item)" class="btn btn-sm btn-danger">
          x
        </button>
        {{ item.description }} - {{item.isDone ? 'completed' : 'pending'}}
        <button v-on:click="toggle(item)"
          class="btn-btn-sm btn-primary float-right">
          toggle
        </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },

  methods: {
    toggle(item) {
      this.$emit('toggle', item)
    },
    remove(item) {
      this.$emit('remove', item)
    }
  }
}
</script>

<style>

</style>
