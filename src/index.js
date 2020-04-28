import BApp from './components/BApp/BApp'
import BButton from './components/BButton/BButton'
import BCard from './components/BCard/BCard'
import BCode from './components/BCode/BCode'
import BComment from './components/BComment/BComment'
import BContainer from './components/BContainer/BContainer'
import BDropdown from './components/BDropdown/BDropdown'
import BDropdownItem from './components/BDropdown/BDropdownItem'
import BDropdownDivider from './components/BDropdown/BDropdownDivider'
import BForm from './components/BForm/BForm'
import BOffCanvas from './components/BOffCanvas/BOffCanvas'
import BSearch from './components/BSearch/BSearch'
import BSpinner from './components/BSpinner/BSpinner'
import BTable from './components/BTable/BTable'
import BContent from './components/BContent/BContent'
import BDivider from './components/BDivider/BDivider'
import BMasthead from './components/BMasthead/BMasthead'
import BNotificationBar from './components/BNotification/BNotificationBar'
import BNotification from './components/BNotification/BNotification'
import BIconApps from './components/BIcon/BIconApps'
import BIconBin from './components/BIcon/BIconBin'
import BIconBookmark from './components/BIcon/BIconBookmark'
import BIconClose from './components/BIcon/BIconClose'
import BIconDone from './components/BIcon/BIconDone'
import BIconDownload from './components/BIcon/BIconDownload'
import BIconFilter from './components/BIcon/BIconFilter'
import BIconMenu from './components/BIcon/BIconMenu'
import BIconMinus from './components/BIcon/BIconMinus'
import BIconPause from './components/BIcon/BIconPause'
import BIconPencil from './components/BIcon/BIconPencil'
import BIconPlay from './components/BIcon/BIconPlay'
import BIconPlus from './components/BIcon/BIconPlus'
import BIconProfile from './components/BIcon/BIconProfile'
import BIconSettings from './components/BIcon/BIconSettings'
import BIconMore from './components/BIcon/BIconMore'
import BList from './components/BList/BList'
import BListSeparator from './components/BList/BListSeparator'
import BFormAutocomplete from './components/BForm/BFormAutocomplete'
import BTheme from './components/BTheme/BTheme'
import BToggle from './components/BToggle/BToggle'
import BModal from './components/BModal/BModal'
import themes from './utils/themes'
import focus from './directives/focus'
import notification from './services/notification'

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
  BSpinner,
  BTable,
  BForm,
  BButton,
  BCard,
  BComment,
  BOffCanvas,
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
  BList,
  BListSeparator,
  BDropdown,
  BDropdownItem,
  BFormAutocomplete,
  BTheme,
  BToggle,
  BDropdownDivider,
  BModal,
  BIconMore,
  notification,
}

export default {
  install(Vue) {
    Vue.component('b-app', BApp)
    Vue.component('b-content', BContent)
    Vue.component('b-notification', BNotification)
    Vue.component('b-notification-bar', BNotificationBar)
    Vue.component('b-masthead', BMasthead)
    Vue.component('b-divider', BDivider)
    Vue.component('b-code', BCode)
    Vue.component('b-container', BContainer)
    Vue.component('b-search', BSearch)
    Vue.component('b-spinner', BSpinner)
    Vue.component('b-table', BTable)
    Vue.component('b-form', BForm)
    Vue.component('b-button', BButton)
    Vue.component('b-card', BCard)
    Vue.component('b-comment', BComment)
    Vue.component('b-off-canvas', BOffCanvas)
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
    Vue.component('b-icon-more', BIconMore)
    Vue.component('b-list', BList)
    Vue.component('b-list-separator', BListSeparator)
    Vue.component('b-dropdown', BDropdown)
    Vue.component('b-dropdown-item', BDropdownItem)
    Vue.component('b-form-autocomplete', BFormAutocomplete)
    Vue.component('b-theme', BTheme)
    Vue.component('b-toggle', BToggle)
    Vue.component('b-dropdown-divider', BDropdownDivider)
    Vue.component('b-modal', BModal)
    Vue.directive('focus', focus)
    Vue.themes = themes
    Vue.prototype.$notify = notification
  },
}
