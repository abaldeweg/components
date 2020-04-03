<template>
  <b-app>
    <router-link :to="{ name: 'index' }">Home</router-link>
    <b-button @click="toggleDarkMode" type="text">Toggle DarkMode</b-button>
    <b-content>
      <router-view />
    </b-content>
  </b-app>
</template>

<script>
import BApp from './components/BApp/BApp'
import BContent from './components/BContent/BContent'
import BButton from './components/BButton/BButton'

export default {
  name: 'app',
  components: {
    BApp,
    BContent,
    BButton,
  },
  methods: {
    toggleDarkMode() {
      if (document.documentElement.hasAttribute('dark')) {
        document.documentElement.removeAttribute('dark')
      } else {
        document.documentElement.setAttribute('dark', true)
      }
    },
  },
}
</script>
