<template>
  <b-masthead @toggleMenu="menu" @toggleSettings="settings">
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
