import VueI18n from 'vue-i18n'

const init = function () {
  document.documentElement.setAttribute('data-theme', getTheme())
}

const setTheme = function (theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

const getTheme = function () {
  return localStorage.getItem('theme')
}

const setLocale = function (locale) {
  VueI18n.locale = locale
}

export default init

export { setTheme, getTheme, setLocale }
