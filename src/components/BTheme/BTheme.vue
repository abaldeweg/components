<template>
  <b-form @submit.prevent>
    <div class="form_group">
      <div class="form_item">
        <label for="theme" class="form_label visuallyHidden">Theme</label>
      </div>
      <div class="form_item">
        <b-form-select id="theme" v-model="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </b-form-select>
      </div>
    </div>
  </b-form>
</template>

<script>
import BForm from '../BForm/BForm'
import BFormSelect from '../BForm/BFormSelect'
import { getTheme, setTheme } from '../../utils/themes'

export default {
  name: 'theme',
  components: {
    BForm,
    BFormSelect,
  },
  data() {
    return {
      theme: getTheme() || 'light',
    }
  },
  watch: {
    theme: function (theme) {
      setTheme(theme)
    },
  },
}
</script>
