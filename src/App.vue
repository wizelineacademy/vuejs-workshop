<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import TodoPage from './components/todo/TodoPage'
export default {
  name: 'App',
  components: {
    Navbar,
    TodoPage
  }
}
</script>
