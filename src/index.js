import Notification from './components/notification/notification'

export {
  Notification
}

const plugin = {
  install(Vue, options) {
    Vue.component('notification', Notification)
  }
}

export default plugin
