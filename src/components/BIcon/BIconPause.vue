<template>
  <b-icon :size="size">
    <path
      d="M25 0A25 25 0 0 0 0 25a25 25 0 0 0 25 25 25 25 0 0 0 25-25A25 25 0 0 0 25 0zM13 12.5h8v25h-8v-25zm16 0h8v25h-8v-25z"
    />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'

export default {
  name: 'b-icon-pause',
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
