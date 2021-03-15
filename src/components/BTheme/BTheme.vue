<template>
  <b-form @submit.prevent>
    <div class="form_group">
      <div class="form_item">
        <label for="theme" class="form_label visuallyHidden">Theme</label>
      </div>
      <div class="form_item">
        <b-form-select id="theme" v-model="theme">
          <option v-for="theme in themes" :key="theme.key" :value="theme.key">
            {{ theme.name }}
          </option>
        </b-form-select>
      </div>
    </div>
  </b-form>
</template>

<script>
import BForm from '../BForm/BForm'
import BFormSelect from '../BForm/BFormSelect'
import { getTheme, setTheme } from '../../services/theme'

export default {
  name: 'theme',
  props: {
    themes: {
      type: Array,
      default() {
        return [
          { key: 'light', name: 'Light' },
          { key: 'dark', name: 'Dark' },
        ]
      },
    },
  },
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
    theme: function(theme) {
      setTheme(theme)
    },
  },
}
</script>
