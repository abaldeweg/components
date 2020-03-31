<template>
  <b-masthead
    @toggle-menu="menu"
    @toggle-settings="settings"
    :showMenu="showMenu"
    :showSettings="showSettings"
  >
    <a href="/">
      baldeweg/components
    </a>
  </b-masthead>
</template>

<script>
import BMasthead from '../components/BMasthead/BMasthead'

export default {
  name: 'b-masthead-view',
  components: {
    BMasthead
  },
  data() {
    return {
      showMenu: true,
      showSettings: true
    }
  },
  methods: {
    menu: function() {
      alert('Toggle Menu')
    },
    settings: function() {
      alert('Toggle Settings')
    }
  }
}
</script>
