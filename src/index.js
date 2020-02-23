import BApp from './components/BApp/BApp'
import BButton from './components/BButton/BButton'
import BCard from './components/BCard/BCard'
import BCode from './components/BCode/BCode'
import BComment from './components/BComment/BComment'
import BContainer from './components/BContainer/BContainer'
import BContextMenu from './components/BContextMenu/BContextMenu'
import BContextMenuItem from './components/BContextMenuItem/BContextMenuItem'
import BForm from './components/BForm/BForm'
import BOffCanvas from './components/BOffCanvas/BOffCanvas'
import BSearch from './components/BSearch/BSearch'
import BSlider from './components/BSlider/BSlider'
import BSpinner from './components/BSpinner/BSpinner'
import BTable from './components/BTable/BTable'
import BContent from './components/BContent/BContent'
import BDivider from './components/BDivider/BDivider'
import BMasthead from './components/BMasthead/BMasthead'
import BNotificationBar from './components/BNotificationBar/BNotificationBar'
import BNotification from './components/BNotification/BNotification'

export {
  BApp,
  BContent,
  BNotification,
  BNotificationBar,
  BMasthead,
  BDivider,
  BCode,
  BContainer,
  BSearch,
  BSlider,
  BSpinner,
  BTable,
  BForm,
  BButton,
  BCard,
  BComment,
  BContextMenu,
  BContextMenuItem,
  BOffCanvas
}

export default {
  install(Vue) {
    Vue.component('b-app', App)
    Vue.component('b-content', BContent)
    Vue.component('b-notification', BNotification)
    Vue.component('b-notification-bar', BNotificationBar)
    Vue.component('b-masthead', BMasthead)
    Vue.component('b-divider', BDivider)
    Vue.component('b-code', BCode)
    Vue.component('b-container', BContainer)
    Vue.component('b-search', BSearch)
    Vue.component('b-slider', BSlider)
    Vue.component('b-spinner', BSpinner)
    Vue.component('b-table', BTable)
    Vue.component('b-form', BForm)
    Vue.component('b-button', BButton)
    Vue.component('b-card', BCard)
    Vue.component('b-comment', BComment)
    Vue.component('b-context-menu', BContextMenu)
    Vue.component('b-context-menu-item', BContextMenuItem)
    Vue.component('b-off-canvas', BOffCanvas)
  }
}
