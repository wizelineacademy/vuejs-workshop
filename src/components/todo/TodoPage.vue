<template>
  <div>
    <h1>Hello {{name ? name : 'stranger'}}!</h1>
    <input v-model="name" type="text">

    <hr>

    <div class="container">

      <todo-form @addTask="addTask"/>

      <br>

      <h4>To do</h4>
      <todo-list
        @toggle="toggle"
        @remove="remove"
        :tasks="pendingTasks"/>

      <br>

      <h4>Done</h4>
      <todo-list
        @toggle="toggle"
        @remove="remove"
        :tasks="doneTasks"/>

    </div>

  </div>
</template>

<script>
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default {
  components: {
    TodoList,
    TodoForm
  },

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
    addTask (newTask) {
      if(!newTask) {
        return
      }

      this.tasks.push({
        description: newTask,
        isDone: false
      })
    },
    remove(item) {
      const itemIndex = this.tasks.indexOf(item)
      this.tasks.splice(itemIndex, 1)
    }
  }
}
</script>

<style>

</style>
