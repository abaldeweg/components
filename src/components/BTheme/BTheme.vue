<template>
  <b-form @submit.prevent>
    <div class="form_group">
      <div class="form_item">
        <label for="theme" class="form_label visuallyHidden">Theme</label>
      </div>
      <div class="form_item">
        <select class="form_input" id="theme" v-model="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  </b-form>
</template>

<script>
import BForm from '../BForm/BForm'
import { setTheme } from '../../utils/themes'

export default {
  name: 'theme',
  components: {
    BForm,
  },
  data() {
    return {
      theme: 'light',
    }
  },
  watch: {
    theme: function (theme) {
      setTheme(theme)
    },
  },
}
</script>
