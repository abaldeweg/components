import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Global from '../views/Global'
import Notification from '../views/Notification'
import NotificationBar from '../views/NotificationBar'
import Masthead from '../views/Masthead'
import Divider from '../views/Divider'
import BCode from '../views/BCode'

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
      path: '/global',
      name: 'global',
      component: Global
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
    },
    {
      path: '/masthead',
      name: 'masthead',
      component: Masthead
    },
    {
      path: '/divider',
      name: 'divider',
      component: Divider
    },
    {
      path: '/code',
      name: 'code',
      component: BCode
    }
  ]
})
