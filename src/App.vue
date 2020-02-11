<template>
  <b-app>
    <router-link :to="{ name: 'index' }">Home</router-link>
    <router-view />
  </b-app>
</template>

<script>
import BApp from './components/app/app'

export default {
  name: 'app',
  components: {
    BApp
  }
}
</script>
