import App from './components/app/app'
import Notification from './components/notification/notification'
import NotificationBar from './components/notification-bar/notification-bar'
import Masthead from './components/masthead/masthead'

export { App, Notification, NotificationBar, Masthead }

const plugin = {
  install(Vue) {
    Vue.component('b-app', App)
    Vue.component('b-notification', Notification)
    Vue.component('b-notification-bar', NotificationBar)
    Vue.component('b-masthead', Masthead)
  }
}

export default plugin
