<template>
  <b-icon :size="size">
    <path d="m 0,21 h 50 v 8 H 0 Z" />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'
import BIconMixin from '../../mixins/BIcon'

export default {
  name: 'b-icon-minus',
  mixins: [BIconMixin],
  components: {
    BIcon,
  },
}
</script>
