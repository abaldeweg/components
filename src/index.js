import Notification from './components/notification/notification'

export { Notification }

const plugin = {
  install(Vue) {
    Vue.component('b-notification', Notification)
  }
}

export default plugin
