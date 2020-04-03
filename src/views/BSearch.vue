<template>
  <article>
    <b-search placeholder="Search" button="Search" v-model="term" />
    <p>{{ term }}</p>
  </article>
</template>

<script>
import BSearch from '../components/BSearch/BSearch'

export default {
  name: 'b-search-view',
  components: {
    BSearch
  },
  data() {
    return {
      term: null
    }
  }
}
</script>
