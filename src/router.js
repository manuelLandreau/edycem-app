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
      path: '/gdpr',
      name: 'gdpr',
      component: () => import('./views/gdpr-validation.vue')
    },
    {
      path: '/formulaire',
      name: 'formulaire',
      component: () => import('./views/form-declare.vue'),
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
    if (!isAuth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      const gdpr = store.getters['user/gdpr']
      const cir = store.getters['user/cir']
        console.log(gdpr);
        if (!gdpr) {
        next({
          path: '/gdpr',
          query: { redirect: to.fullPath }
        })
      }

      if (to.name === 'formulaire' || to.name === 'projet') {
        if (cir) {
          next()
        } else {
          next({
            path: '/home',
            query: { redirect: to.fullPath }
          })
        }
      }
      next()
    }
  } else {
    next()
  }
})

export default router
