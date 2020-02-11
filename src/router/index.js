import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Notification from '../views/Notification'
import NotificationBar from '../views/NotificationBar'

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
    },
    {
      path: '/notification-bar',
      name: 'notification-bar',
      component: NotificationBar
    }
  ]
})
