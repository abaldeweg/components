import App from './components/app/app'
import Content from './components/content/content'
import Notification from './components/notification/notification'
import NotificationBar from './components/notification-bar/notification-bar'
import Masthead from './components/masthead/masthead'
import Divider from './components/divider/divider'
import BCode from './components/BCode/BCode'
import BContainer from './components/BContainer/BContainer'
import BSearch from './components/BSearch/BSearch'
import BSlider from './components/BSlider/BSlider'
import BSpinner from './components/BSpinner/BSpinner'
import BTable from './components/BTable/BTable'

export {
  App,
  Content,
  Notification,
  NotificationBar,
  Masthead,
  Divider,
  BCode,
  BContainer,
  BSearch,
  BSlider,
  BSpinner,
  BTable
}

const plugin = {
  install(Vue) {
    Vue.component('b-app', App)
    Vue.component('b-content', Content)
    Vue.component('b-notification', Notification)
    Vue.component('b-notification-bar', NotificationBar)
    Vue.component('b-masthead', Masthead)
    Vue.component('b-divider', Divider)
    Vue.component('b-code', BCode)
    Vue.component('b-container', BContainer)
    Vue.component('b-search', BSearch)
    Vue.component('b-slider', BSlider)
    Vue.component('b-spinner', BSpinner)
    Vue.component('b-table', BTable)
  }
}

export default plugin
