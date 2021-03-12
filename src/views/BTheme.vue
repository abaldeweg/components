<template>
  <b-theme
    :themes="[
      { key: 'light', name: 'Light' },
      { key: 'dark', name: 'Dark' },
      { key: 'blue', name: 'Blue' },
    ]"
  />
</template>

<script>
import BTheme from '../components/BTheme/BTheme'

export default {
  name: 'theme-view',
  components: {
    BTheme,
  },
}
</script>
