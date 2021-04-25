<template>
  <b-toggle label="Archive" v-model="value" />
</template>

<script>
import BToggle from '../components/BToggle/BToggle'

export default {
  name: 'b-toggle-view',
  components: {
    BToggle,
  },
  data() {
    return {
      value: false,
    }
  },
  watch: {
    value: function (value) {
      console.log(value)
    },
  },
}
</script>
