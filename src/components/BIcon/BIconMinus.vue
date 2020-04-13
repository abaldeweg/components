<template>
  <b-icon :size="size">
    <path d="m 0,21 h 50 v 8 H 0 Z" />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'

export default {
  name: 'b-icon-minus',
  props: {
    size: {
      type: Number,
      default: 25,
    },
  },
  components: {
    BIcon,
  },
}
</script>
