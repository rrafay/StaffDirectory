import Vue from 'vue'
import VueRouter from 'vue-router'
import Staff from '../views/Staff.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Staff',
    component: Staff
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/departments',
    name: 'Departments',

    component: () => import('../views/Departments.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
