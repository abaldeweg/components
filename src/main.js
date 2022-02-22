import './installCompositionApi.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHolder from 'vue-holderjs'
import themes from './services/theme'
import meta from './meta'
import './theme.css'

Vue.use(VueHolder)
themes()
Vue.config.productionTip = false

new Vue({
  router,
  meta,
  render: (h) => h(App),
}).$mount('#app')
