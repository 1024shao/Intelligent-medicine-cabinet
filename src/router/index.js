import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    component: Home,
  }
]

const router = new VueRouter({
  routes
})

export default router
