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
    search: function () {
      console.log('searching')
    },
    filter: function () {
      console.log('filter')
    },
  },
}
</script>
