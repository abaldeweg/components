<template>
  <b-form @submit.prevent="setLocale">
    <b-form-select v-model="locale" @change="setLocale">
      <option value="en">English</option>
      <option value="de">Deutsch</option>
    </b-form-select>
  </b-form>
</template>

<script>
import BForm from '../BForm/BForm'
import BFormSelect from '../BForm/BFormSelect'

export default {
  name: 'b-locale',
  props: {
    fallback: {
      type: String,
      default: 'en',
    },
  },
  components: {
    BForm,
    BFormSelect,
  },
  data() {
    return {
      locale: window.localStorage.getItem('locale') || this.fallback,
    }
  },
  methods: {
    setLocale: function () {
      this.$i18n.locale = this.locale
      window.localStorage.setItem('locale', this.locale)
    },
  },
}
</script>
