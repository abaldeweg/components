import Vue from 'vue'
import Router from 'vue-router'
import BButton from '../views/BButton'
import BCard from '../views/BCard'
import BCode from '../views/BCode'
import BComment from '../views/BComment'
import BContainer from '../views/BContainer'
import BContextMenu from '../views/BContextMenu'
import BDivider from '../views/BDivider'
import BForm from '../views/BForm'
import BGlobal from '../views/BGlobal'
import BIcon from '../views/BIcon'
import BList from '../views/BList'
import BMasthead from '../views/BMasthead'
import BNotification from '../views/BNotification'
import BNotificationBar from '../views/BNotificationBar'
import BOffCanvas from '../views/BOffCanvas'
import BSearch from '../views/BSearch'
import BSlider from '../views/BSlider'
import BSpinner from '../views/BSpinner'
import BTable from '../views/BTable'
import BThreeCol from '../views/BThreeCol'
import Index from '../views/Index'

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
      component: BGlobal
    },
    {
      path: '/notification',
      name: 'notification',
      component: BNotification
    },
    {
      path: '/notification-bar',
      name: 'notification-bar',
      component: BNotificationBar
    },
    {
      path: '/masthead',
      name: 'masthead',
      component: BMasthead
    },
    {
      path: '/divider',
      name: 'divider',
      component: BDivider
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
    },
    {
      path: '/three-col',
      name: 'three-col',
      component: BThreeCol
    },
    {
      path: '/list',
      name: 'list',
      component: BList
    }
  ]
})
