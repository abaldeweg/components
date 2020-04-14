<template>
  <b-app>
    <router-link :to="{ name: 'index' }">Home</router-link>
    <b-content>
      <router-view />
    </b-content>
  </b-app>
</template>

<script>
import BApp from './components/BApp/BApp'
import BContent from './components/BContent/BContent'

export default {
  name: 'app',
  components: {
    BApp,
    BContent,
  },
}
</script>
