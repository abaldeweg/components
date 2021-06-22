import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import VueHolder from 'vue-holderjs'
import themes from './services/theme'
import meta from './meta'
import VueCompositionAPI from '@vue/composition-api'
import './theme.css'

Vue.use(VueHolder)
Vue.use(VueCompositionAPI)
themes()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  meta,
  render: (h) => h(App),
}).$mount('#app')
