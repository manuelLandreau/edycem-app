import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

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
    },
    {
      path: '/formulaire',
      name: 'formulaire',
      component: () => import('./views/formulaire.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/projet',
      name: 'projet',
      component: () => import('./views/form-project.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    const isAuth = store.getters['auth/isAuth']
    console.log(isAuth)
    if (!isAuth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      const gdpr = store.getters['user/gdprValidation']
      const cir = store.getters['user/cir']
      if (to.name === 'formulaire') {
        gdpr && cir
          ? next()
          : next({
              path: '/home',
              query: { redirect: to.fullPath }
            })
      }
      next()
    }
  } else {
    next()
  }
})

export default router
