<template>
  <b-search placeholder="Search for Posts" button="Search" @term="term" />
</template>

<script>
import BSearch from '../components/BSearch/BSearch'

export default {
  name: 'b-search-view',
  components: {
    BSearch
  },
  methods: {
    term: function(term) {
      console.log(term)
    }
  }
}
</script>
