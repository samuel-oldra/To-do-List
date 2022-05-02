import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'
import Sobre from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/Sobre',
    name: 'Sobre',
    component: Sobre
  }
]

const router = new VueRouter({
  routes
})

export default router
