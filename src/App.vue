<template>
  <b-app id="app">
    <b-content>
      <router-view />
    </b-content>

    <div
      class="components"
      :class="{
        isTop: position === 'top',
        isBottom: position === 'bottom',
      }"
    >
      <router-link :to="{ name: 'index' }">Home</router-link>
      <b-theme />
      <b-locale :fallback="locale" />
      <button @click="togglePosition">Top/Bottom</button>
    </div>
    <b-tooltip />
  </b-app>
</template>

<script>
import BApp from './components/BApp/BApp'
import BContent from './components/BContent/BContent'
import BTheme from './components/BTheme/BTheme'
import BLocale from './components/BLocale/BLocale'
import BTooltip from './components/BTooltip/BTooltip'

export default {
  name: 'app',
  components: {
    BApp,
    BContent,
    BTheme,
    BLocale,
    BTooltip,
  },
  head: {
    title: 'Home',
    titleTemplate: '%s - components',
  },
  data() {
    return {
      position: 'bottom',
      locale: this.$i18n.locale || 'en',
    }
  },
  methods: {
    togglePosition: function() {
      this.position = this.position === 'top' ? 'bottom' : 'top'
    },
  },
  mounted: function() {
    this.$i18n.locale =
      window.localStorage.getItem('locale') || process.env.VUE_APP_I18N_LOCALE
  },
}
</script>

<style scoped>
.components {
  position: fixed;
  right: 0;
  width: 200px;
  border: 1px solid var(--color-neutral-04);
  border-radius: 10px;
  background: var(--color-neutral-00);
  padding: 20px;
  margin: 20px;
  box-sizing: border-box;
}
.components.isTop {
  top: 0;
}
.components.isBottom {
  bottom: 0;
}
</style>
