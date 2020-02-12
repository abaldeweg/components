<template>
  <b-app>
    <router-link :to="{ name: 'index' }">Home</router-link>
    <b-content>
      <router-view />
    </b-content>
    <button @click="toggleDarkMode">Toggle DarkMode</button>
  </b-app>
</template>

<script>
import BApp from './components/app/app'
import BContent from './components/content/content'

export default {
  name: 'app',
  components: {
    BApp,
    BContent
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
