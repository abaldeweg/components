<template>
  <article>
    <b-search
      placeholder="Search"
      button="Search"
      icon
      filter
      v-model="term"
      @input="search"
      @submit.prevent="search"
      @filter="filter"
      @reset="reset"
    />
    <p>{{ term }}</p>
  </article>
</template>

<script>
import BSearch from '../components/BSearch/BSearch'

export default {
  name: 'b-search-view',
  components: {
    BSearch,
  },
  data() {
    return {
      term: null,
    }
  },
  methods: {
    search() {
      console.log('searching')
    },
    filter() {
      console.log('filter')
    },
    reset() {
      console.log('reset')
    },
  },
}
</script>
