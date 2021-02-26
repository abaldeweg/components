import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './locales'
import VueHolder from 'vue-holderjs'
import themes from './services/theme'

Vue.use(VueHolder)
themes()
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {
    App,
  },
  template: '<App/>',
})
