import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import todo from '../components/todo/Main'
import movies from '../components/movies/Main'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: todo },
  { path: '/movies', component: movies }
]

export default new VueRouter({
  routes
})
