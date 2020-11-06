<template>
  <b-tab>
    <b-tab-link>
      <a href="link"> item 1 </a>
    </b-tab-link>
    <b-tab-link>
      <a href="link"> item 2 </a>
    </b-tab-link>
    <b-tab-link>
      <a href="link"> item 3 </a>
    </b-tab-link>
  </b-tab>
</template>

<script>
import BTab from '../components/BTab/BTab'
import BTabLink from '../components/BTab/BTabLink'

export default {
  name: 'b-tab-view',
  components: {
    BTab,
    BTabLink,
  },
}
</script>
