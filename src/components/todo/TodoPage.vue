<template>
  <div>
    <h1>Hello {{name ? name : 'stranger'}}!</h1>
    <input v-model="name" type="text">

    <hr>

    <div class="container">

      <form v-on:submit.prevent="addTask">
        <div class="input-group">
          <input v-model="newTask" type="text" class="form-control">
          <div class="input-group-btn">
            <button class="btn btn-warning">
              add
            </button>
          </div>
        </div>
      </form>

      <br>

      <h4>To do</h4>
      <ul class="list-group">
        <li v-for="(item, index) in pendingTasks"
          v-bind:key="index"
          class="list-group-item">
            {{ item.description }} - {{item.isDone ? 'completed' : 'pending'}}
            <button v-on:click="toggle(item)"
              class="btn-btn-sm btn-primary float-right">
              toggle
            </button>
        </li>
      </ul>

      <br>

      <h4>Done</h4>
      <ul class="list-group">
        <li v-for="(item, index) in doneTasks"
          v-bind:key="index"
          class="list-group-item">
            {{ item.description }} - {{item.isDone ? 'completed' : 'pending'}}
            <button v-on:click="toggle(item)"
              class="btn-btn-sm btn-primary float-right">
              toggle
            </button>
        </li>
      </ul>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      newTask: '',
      tasks: [
        {description: 'Learn vue basics', isDone: true},
        {description: 'Do a to do app', isDone: false},
        {description: 'Do a complete SPA', isDone: false}
      ]
    }
  },

  computed: {
    pendingTasks () {
      return this.tasks.filter(item => !item.isDone)
    },
    doneTasks () {
      return this.tasks.filter(item => item.isDone)
    }
  },

  methods: {
    toggle(todo) {
      todo.isDone = !todo.isDone
    },
    addTask () {
      if(!this.newTask) {
        return
      }

      this.tasks.push({
        description: this.newTask,
        isDone: false
      })
      this.newTask = ''
    }
  }
}
</script>

<style>

</style>
