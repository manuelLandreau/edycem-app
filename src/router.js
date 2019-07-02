import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: () => import('./views/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    }
  ]
})

export default router
