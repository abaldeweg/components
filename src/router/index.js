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
import BBottomNav from '../views/BBottomNav'
import BDrawer from '../views/BDrawer'
import BSearch from '../views/BSearch'
import BSpinner from '../views/BSpinner'
import BTable from '../views/BTable'
import BDropdown from '../views/BDropdown'
import BSwitch from '../views/BSwitch'
import BModal from '../views/BModal'
import BScrollToBottom from '../views/BScrollToBottom'
import BTabs from '../views/BTabs'
import BHorizontalList from '../views/BHorizontalList'
import BTooltip from '../views/BTooltip'
import BToast from '../views/BToast'
import BAlert from '../views/BAlert'

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
    path: '/masthead',
    name: 'masthead',
    component: BMasthead,
  },
  {
    path: '/bottom-nav',
    name: 'bottom-nav',
    component: BBottomNav,
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
    path: '/drawer',
    name: 'drawer',
    component: BDrawer,
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
    path: '/switch',
    name: 'switch',
    component: BSwitch,
  },
  {
    path: '/modal',
    name: 'modal',
    component: BModal,
  },
  {
    path: '/scroll-to-bottom',
    name: 'scrollToBottom',
    component: BScrollToBottom,
  },
  {
    path: '/tooltip',
    name: 'tooltip',
    component: BTooltip,
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: BTabs,
  },
  {
    path: '/horizontal-list',
    name: 'horizontalList',
    component: BHorizontalList,
  },
  {
    path: '/toast',
    name: 'toast',
    component: BToast,
  },
  {
    path: '/alert',
    name: 'alert',
    component: BAlert,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
