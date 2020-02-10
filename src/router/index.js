import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Notification from '../views/Notification'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: '',
  linkExactActiveClass: '',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification
    }
  ]
})
