<template>
  <b-app>
    <router-link :to="{ name: 'index' }">Home</router-link>
    <router-view />
    <button @click="toggleDarkMode">Toggle DarkMode</button>
  </b-app>
</template>

<script>
import BApp from './components/app/app'

export default {
  name: 'app',
  components: {
    BApp
  },
  methods: {
    toggleDarkMode() {
      if (document.documentElement.hasAttribute('dark')) {
        document.documentElement.removeAttribute('dark')
      } else {
        document.documentElement.setAttribute('dark', true)
      }
    }
  }
}
</script>
