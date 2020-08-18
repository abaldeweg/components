import BApp from './components/BApp/BApp'
import BButton from './components/BButton/BButton'
import BCard from './components/BCard/BCard'
import BCode from './components/BCode/BCode'
import BComment from './components/BComment/BComment'
import BContainer from './components/BContainer/BContainer'
import BDropdown from './components/BDropdown/BDropdown'
import BDropdownItem from './components/BDropdown/BDropdownItem'
import BDropdownDivider from './components/BDropdown/BDropdownDivider'
import BDropdownTitle from './components/BDropdown/BDropdownTitle'
import BForm from './components/BForm/BForm'
import BFormAutosuggest from './components/BForm/BFormAutosuggest'
import BFormFieldset from './components/BForm/BFormFieldset'
import BFormGroup from './components/BForm/BFormGroup'
import BFormInput from './components/BForm/BFormInput'
import BFormItem from './components/BForm/BFormItem'
import BFormLabel from './components/BForm/BFormLabel'
import BFormLegend from './components/BForm/BFormLegend'
import BFormSelect from './components/BForm/BFormSelect'
import BFormTextarea from './components/BForm/BFormTextarea'
import BOffCanvas from './components/BOffCanvas/BOffCanvas'
import BSearch from './components/BSearch/BSearch'
import BSpinner from './components/BSpinner/BSpinner'
import BTable from './components/BTable/BTable'
import BContent from './components/BContent/BContent'
import BDivider from './components/BDivider/BDivider'
import BMasthead from './components/BMasthead/BMasthead'
import BMastheadItem from './components/BMasthead/BMastheadItem'
import BNotificationBar from './components/BNotification/BNotificationBar'
import BNotification from './components/BNotification/BNotification'
import BIcon from './components/BIcon/BIcon'
import BList from './components/BList/BList'
import BListSeparator from './components/BList/BListSeparator'
import BTheme from './components/BTheme/BTheme'
import BToggle from './components/BToggle/BToggle'
import BModal from './components/BModal/BModal'
import BScrollToBottom from './components/BScrollToBottom/BScrollToBottom'
import BLocale from './components/BLocale/BLocale'
import BTooltip from './components/BTooltip/BTooltip'
import themes from './services/theme'
import focus from './directives/focus'
import tooltip from './directives/tooltip'
import notification from './services/notification'
import validator from './services/validator'

export {
  BApp,
  BContent,
  BNotification,
  BNotificationBar,
  BMasthead,
  BMastheadItem,
  BDivider,
  BCode,
  BContainer,
  BSearch,
  BSpinner,
  BTable,
  BForm,
  BFormAutosuggest,
  BFormFieldset,
  BFormGroup,
  BFormInput,
  BFormItem,
  BFormLabel,
  BFormLegend,
  BFormSelect,
  BFormTextarea,
  BButton,
  BCard,
  BComment,
  BOffCanvas,
  BIcon,
  BList,
  BListSeparator,
  BDropdown,
  BDropdownItem,
  BTheme,
  BToggle,
  BDropdownDivider,
  BDropdownTitle,
  BModal,
  BScrollToBottom,
  BLocale,
  BTooltip,
  notification,
  validator,
}

export default {
  install(Vue) {
    Vue.component('b-app', BApp)
    Vue.component('b-content', BContent)
    Vue.component('b-notification', BNotification)
    Vue.component('b-notification-bar', BNotificationBar)
    Vue.component('b-masthead', BMasthead)
    Vue.component('b-masthead-item', BMastheadItem)
    Vue.component('b-divider', BDivider)
    Vue.component('b-code', BCode)
    Vue.component('b-container', BContainer)
    Vue.component('b-search', BSearch)
    Vue.component('b-spinner', BSpinner)
    Vue.component('b-table', BTable)
    Vue.component('b-form', BForm)
    Vue.component('b-form-autosuggest', BFormAutosuggest)
    Vue.component('b-form-fieldset', BFormFieldset)
    Vue.component('b-form-group', BFormGroup)
    Vue.component('b-form-input', BFormInput)
    Vue.component('b-form-item', BFormItem)
    Vue.component('b-form-label', BFormLabel)
    Vue.component('b-form-legend', BFormLegend)
    Vue.component('b-form-select', BFormSelect)
    Vue.component('b-form-textarea', BFormTextarea)
    Vue.component('b-button', BButton)
    Vue.component('b-card', BCard)
    Vue.component('b-comment', BComment)
    Vue.component('b-off-canvas', BOffCanvas)
    Vue.component('b-icon', BIcon)
    Vue.component('b-list', BList)
    Vue.component('b-list-separator', BListSeparator)
    Vue.component('b-dropdown', BDropdown)
    Vue.component('b-dropdown-item', BDropdownItem)
    Vue.component('b-theme', BTheme)
    Vue.component('b-toggle', BToggle)
    Vue.component('b-dropdown-divider', BDropdownDivider)
    Vue.component('b-dropdown-title', BDropdownTitle)
    Vue.component('b-modal', BModal)
    Vue.component('b-scroll-to-bottom', BScrollToBottom)
    Vue.component('b-locale', BLocale)
    Vue.component('b-tooltip', BTooltip)
    Vue.directive('focus', focus)
    Vue.directive('tooltip', tooltip)
    Vue.themes = themes
    Vue.prototype.$notify = notification
  },
}
