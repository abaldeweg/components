<template>
  <b-links>
    <b-links-link>
      <a href="link">link 1</a>
    </b-links-link>
    <b-links-link>
      <a href="link">link 2</a>
    </b-links-link>
    <b-links-link>
      <a href="link">link 3</a>
    </b-links-link>
  </b-links>
</template>

<script>
import BLinks from '../components/BLinks/BLinks'
import BLinksLink from '../components/BLinks/BLinksLink'

export default {
  name: 'b-links-view',
  components: {
    BLinks,
    BLinksLink,
  },
}
</script>
