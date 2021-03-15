import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import BButton from '../views/BButton'
import BCard from '../views/BCard'
import BCode from '../views/BCode'
import BComment from '../views/BComment'
import BContainer from '../views/BContainer'
import BDivider from '../views/BDivider'
import BForm from '../views/BForm'
import BGlobal from '../views/BGlobal'
import BIcon from '../views/BIcon'
import BList from '../views/BList'
import BMasthead from '../views/BMasthead'
import BNotification from '../views/BNotification'
import BOffCanvas from '../views/BOffCanvas'
import BSearch from '../views/BSearch'
import BSpinner from '../views/BSpinner'
import BTable from '../views/BTable'
import BDropdown from '../views/BDropdown'
import BTheme from '../views/BTheme'
import BToggle from '../views/BToggle'
import BModal from '../views/BModal'
import BScrollToBottom from '../views/BScrollToBottom'
import BLocale from '../views/BLocale'
import BActionbar from '../views/BActionbar'
import BTab from '../views/BTab'
import BLinks from '../views/BLinks'
import BHorizontalList from '../views/BHorizontalList'
import BNotFound from '../views/BNotFound'
import Focus from '../views/Focus'
import Tooltip from '../views/Tooltip'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/global',
    name: 'global',
    component: BGlobal,
  },
  {
    path: '/notification',
    name: 'notification',
    component: BNotification,
  },
  {
    path: '/masthead',
    name: 'masthead',
    component: BMasthead,
  },
  {
    path: '/divider',
    name: 'divider',
    component: BDivider,
  },
  {
    path: '/code',
    name: 'code',
    component: BCode,
  },
  {
    path: '/container',
    name: 'container',
    component: BContainer,
  },
  {
    path: '/search',
    name: 'search',
    component: BSearch,
  },
  {
    path: '/spinner',
    name: 'spinner',
    component: BSpinner,
  },
  {
    path: '/icon',
    name: 'icon',
    component: BIcon,
  },
  {
    path: '/table',
    name: 'table',
    component: BTable,
  },
  {
    path: '/form',
    name: 'form',
    component: BForm,
  },
  {
    path: '/button',
    name: 'button',
    component: BButton,
  },
  {
    path: '/card',
    name: 'card',
    component: BCard,
  },
  {
    path: '/comment',
    name: 'comment',
    component: BComment,
  },
  {
    path: '/off-canvas',
    name: 'off-canvas',
    component: BOffCanvas,
  },
  {
    path: '/list',
    name: 'list',
    component: BList,
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component: BDropdown,
  },
  {
    path: '/theme',
    name: 'theme',
    component: BTheme,
  },
  {
    path: '/toggle',
    name: 'toggle',
    component: BToggle,
  },
  {
    path: '/modal',
    name: 'modal',
    component: BModal,
  },
  {
    path: '/focus',
    name: 'focus',
    component: Focus,
  },
  {
    path: '/scroll-to-bottom',
    name: 'scrollToBottom',
    component: BScrollToBottom,
  },
  {
    path: '/tooltip',
    name: 'tooltip',
    component: Tooltip,
  },
  {
    path: '/locale',
    name: 'locale',
    component: BLocale,
  },
  {
    path: '/actionbar',
    name: 'actionbar',
    component: BActionbar,
  },
  {
    path: '/tab',
    name: 'tab',
    component: BTab,
  },
  {
    path: '/links',
    name: 'links',
    component: BLinks,
  },
  {
    path: '/horizontal-list',
    name: 'horizontalList',
    component: BHorizontalList,
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: BNotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
