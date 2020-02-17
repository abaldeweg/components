import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Global from '../views/Global'
import Notification from '../views/Notification'
import NotificationBar from '../views/NotificationBar'
import Masthead from '../views/Masthead'
import Divider from '../views/Divider'
import BCode from '../views/BCode'
import BContainer from '../views/BContainer'
import BSearch from '../views/BSearch'
import BSlider from '../views/BSlider'
import BSpinner from '../views/BSpinner'
import BIcon from '../views/BIcon'
import BTable from '../views/BTable'
import BForm from '../views/BForm'
import BButton from '../views/BButton'
import BCard from '../views/BCard'
import BComment from '../views/BComment'
import BContextMenu from '../views/BContextMenu'
import BOffCanvas from '../views/BOffCanvas'

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
    },
    {
      path: '/container',
      name: 'container',
      component: BContainer
    },
    {
      path: '/search',
      name: 'search',
      component: BSearch
    },
    {
      path: '/slider',
      name: 'slider',
      component: BSlider
    },
    {
      path: '/spinner',
      name: 'spinner',
      component: BSpinner
    },
    {
      path: '/icon',
      name: 'icon',
      component: BIcon
    },
    {
      path: '/table',
      name: 'table',
      component: BTable
    },
    {
      path: '/form',
      name: 'form',
      component: BForm
    },
    {
      path: '/button',
      name: 'button',
      component: BButton
    },
    {
      path: '/card',
      name: 'card',
      component: BCard
    },
    {
      path: '/comment',
      name: 'comment',
      component: BComment
    },
    {
      path: '/context-menu',
      name: 'context-menu',
      component: BContextMenu
    },
    {
      path: '/off-canvas',
      name: 'off-canvas',
      component: BOffCanvas
    }
  ]
})
