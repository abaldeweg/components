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
import BFormFieldset from './components/BForm/BFormFieldset'
import BFormGroup from './components/BForm/BFormGroup'
import BFormInput from './components/BForm/BFormInput'
import BFormItem from './components/BForm/BFormItem'
import BFormLabel from './components/BForm/BFormLabel'
import BFormLegend from './components/BForm/BFormLegend'
import BFormSelect from './components/BForm/BFormSelect'
import BFormTextarea from './components/BForm/BFormTextarea'
import BFormHelpline from './components/BForm/BFormHelpline'
import BDrawer from './components/BDrawer/BDrawer'
import BSearch from './components/BSearch/BSearch'
import BSpinner from './components/BSpinner/BSpinner'
import BTable from './components/BTable/BTable'
import BDivider from './components/BDivider/BDivider'
import BMasthead from './components/BMasthead/BMasthead'
import BMastheadItem from './components/BMasthead/BMastheadItem'
import BBottomNav from './components/BBottomNav/BBottomNav'
import BBottomNavItem from './components/BBottomNav/BBottomNavItem'
import BIcon from './components/BIcon/BIcon'
import BList from './components/BList/BList'
import BSwitch from './components/BSwitch/BSwitch'
import BModal from './components/BModal/BModal'
import BScrollToBottom from './components/BScrollToBottom/BScrollToBottom'
import BTooltip from './components/BTooltip/BTooltip'
import BTabs from './components/BTabs/BTabs'
import BHorizontalList from './components/BHorizontalList/BHorizontalList'
import BHorizontalListItem from './components/BHorizontalList/BHorizontalListItem'
import BToast from './components/BToast/BToast'
import BAlert from './components/BAlert/BAlert'
import themes from './services/theme'

export {
  BApp,
  BMasthead,
  BMastheadItem,
  BBottomNav,
  BBottomNavItem,
  BDivider,
  BCode,
  BContainer,
  BSearch,
  BSpinner,
  BTable,
  BForm,
  BFormFieldset,
  BFormGroup,
  BFormInput,
  BFormItem,
  BFormLabel,
  BFormLegend,
  BFormSelect,
  BFormTextarea,
  BFormHelpline,
  BButton,
  BCard,
  BComment,
  BDrawer,
  BIcon,
  BList,
  BDropdown,
  BDropdownItem,
  BSwitch,
  BDropdownDivider,
  BModal,
  BScrollToBottom,
  BTooltip,
  BTabs,
  BHorizontalList,
  BHorizontalListItem,
  BToast,
  BAlert,
}

export default {
  install(Vue) {
    Vue.component('b-app', BApp)
    Vue.component('b-masthead', BMasthead)
    Vue.component('b-masthead-item', BMastheadItem)
    Vue.component('b-bottom-nav', BBottomNav)
    Vue.component('b-bottom-nav-item', BBottomNavItem)
    Vue.component('b-divider', BDivider)
    Vue.component('b-code', BCode)
    Vue.component('b-container', BContainer)
    Vue.component('b-search', BSearch)
    Vue.component('b-spinner', BSpinner)
    Vue.component('b-table', BTable)
    Vue.component('b-form', BForm)
    Vue.component('b-form-fieldset', BFormFieldset)
    Vue.component('b-form-group', BFormGroup)
    Vue.component('b-form-input', BFormInput)
    Vue.component('b-form-item', BFormItem)
    Vue.component('b-form-label', BFormLabel)
    Vue.component('b-form-legend', BFormLegend)
    Vue.component('b-form-select', BFormSelect)
    Vue.component('b-form-textarea', BFormTextarea)
    Vue.component('b-form-helpline', BFormHelpline)
    Vue.component('b-button', BButton)
    Vue.component('b-card', BCard)
    Vue.component('b-comment', BComment)
    Vue.component('b-drawer', BDrawer)
    Vue.component('b-icon', BIcon)
    Vue.component('b-list', BList)
    Vue.component('b-dropdown', BDropdown)
    Vue.component('b-dropdown-item', BDropdownItem)
    Vue.component('b-switch', BSwitch)
    Vue.component('b-dropdown-divider', BDropdownDivider)
    Vue.component('b-modal', BModal)
    Vue.component('b-scroll-to-bottom', BScrollToBottom)
    Vue.component('b-tooltip', BTooltip)
    Vue.component('b-tabs', BTabs)
    Vue.component('b-horizontal-list', BHorizontalList)
    Vue.component('b-horizontal-list-item', BHorizontalListItem)
    Vue.component('b-toast', BToast)
    Vue.component('b-alert', BAlert)
    Vue.themes = themes
  },
}
