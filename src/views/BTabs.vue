<template>
  <b-tabs>
    <b-tabs-link v-for="n in 10" :key="n">
      <a href="link">Item {{ n }}</a>
    </b-tabs-link>
  </b-tabs>
</template>

<script>
import BTabs from '../components/BTabs/BTabs'
import BTabsLink from '../components/BTabs/BTabsLink'

export default {
  name: 'b-tabs-view',
  components: {
    BTabs,
    BTabsLink,
  },
}
</script>
