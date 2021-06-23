<template>
  <b-app id="app">
    <router-view />

    <div
      class="components"
      :class="{
        isTop: position === 'top',
        isBottom: position === 'bottom',
      }"
    >
      <p><router-link :to="{ name: 'index' }">Home</router-link></p>
      <p><button @click="togglePosition">Top/Bottom</button></p>
      <b-form @submit.prevent>
        <div class="form_group">
          <div class="form_item">
            <label for="theme" class="form_label visuallyHidden">Theme</label>
          </div>
          <div class="form_item">
            <b-form-select id="theme" v-model="theme" :items="themes" />
          </div>
        </div>
      </b-form>
    </div>

    <b-tooltip />
  </b-app>
</template>

<script>
import BApp from './components/BApp/BApp'
import BTooltip from './components/BTooltip/BTooltip'
import BForm from './components/BForm/BForm'
import BFormSelect from './components/BForm/BFormSelect'
import { getTheme, setTheme } from './services/theme'

export default {
  name: 'app',
  components: {
    BApp,
    BTooltip,
    BForm,
    BFormSelect,
  },
  head: {
    title: 'Home',
    titleTemplate: '%s - components',
  },
  data() {
    return {
      position: 'bottom',
      themes: [
        { key: 'light', name: 'Light' },
        { key: 'dark', name: 'Dark' },
      ],
      theme: getTheme() || 'light',
    }
  },
  methods: {
    togglePosition() {
      this.position = this.position === 'top' ? 'bottom' : 'top'
    },
  },
  watch: {
    theme(theme) {
      setTheme(theme)
    },
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
