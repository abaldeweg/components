<template>
  <b-locale :locales="locales" fallback="en" />
</template>

<script>
import BLocale from '../components/BLocale/BLocale'

export default {
  name: 'locale-view',
  components: {
    BLocale,
  },
  computed: {
    locales() {
      return [
        { locale: 'en-US', title: 'English' },
        { locale: 'de-DE', title: 'Deutsch' },
        { locale: 'fr-FR', title: 'Français' },
      ]
    },
  },
}
</script>
