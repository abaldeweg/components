import BApp from './components/BApp/BApp'
import BButton from './components/BButton/BButton'
import BCard from './components/BCard/BCard'
import BCode from './components/BCode/BCode'
import BComment from './components/BComment/BComment'
import BContainer from './components/BContainer/BContainer'
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
import BThreeCol from './components/BThreeCol/BThreeCol'
import BIconApps from './components/BIcon/BIconApps'
import BIconBin from './components/BIconBin/BIconBin'
import BIconBookmark from './components/BIconBookmark/BIconBookmark'
import BIconClose from './components/BIconClose/BIconClose'
import BIconDone from './components/BIconDone/BIconDone'
import BIconDownload from './components/BIconDownload/BIconDownload'
import BIconFilter from './components/BIconFilter/BIconFilter'
import BIconMenu from './components/BIconMenu/BIconMenu'
import BIconMinus from './components/BIconMinus/BIconMinus'
import BIconPause from './components/BIconPause/BIconPause'
import BIconPencil from './components/BIconPencil/BIconPencil'
import BIconPlay from './components/BIconPlay/BIconPlay'
import BIconPlus from './components/BIconPlus/BIconPlus'
import BIconProfile from './components/BIconProfile/BIconProfile'
import BIconSettings from './components/BIconSettings/BIconSettings'
import BList from './components/BList/BList'

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
  BOffCanvas,
  BThreeCol,
  BIconApps,
  BIconBin,
  BIconBookmark,
  BIconClose,
  BIconDone,
  BIconDownload,
  BIconFilter,
  BIconMenu,
  BIconMinus,
  BIconPause,
  BIconPencil,
  BIconPlay,
  BIconPlus,
  BIconProfile,
  BIconSettings,
  BList
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
    Vue.component('b-off-canvas', BOffCanvas)
    Vue.component('b-three-col', BThreeCol)
    Vue.component('b-icon-apps', BIconApps)
    Vue.component('b-icon-bin', BIconBin)
    Vue.component('b-icon-bookmark', BIconBookmark)
    Vue.component('b-icon-close', BIconClose)
    Vue.component('b-icon-done', BIconDone)
    Vue.component('b-icon-download', BIconDownload)
    Vue.component('b-icon-filter', BIconFilter)
    Vue.component('b-icon-menu', BIconMenu)
    Vue.component('b-icon-minus', BIconMinus)
    Vue.component('b-icon-pause', BIconPause)
    Vue.component('b-icon-pencil', BIconPencil)
    Vue.component('b-icon-play', BIconPlay)
    Vue.component('b-icon-plus', BIconPlus)
    Vue.component('b-icon-profile', BIconProfile)
    Vue.component('b-icon-settings', BIconSettings)
    Vue.component('b-list', BList)
  }
}
