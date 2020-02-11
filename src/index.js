import Notification from './components/notification/notification'
import NotificationBar from './components/notification-bar/notification-bar'

export { Notification, NotificationBar }

const plugin = {
  install(Vue) {
    Vue.component('b-notification', Notification)
    Vue.component('b-notification-bar', NotificationBar)
  }
}

export default plugin
