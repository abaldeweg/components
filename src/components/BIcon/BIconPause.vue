<template>
  <b-icon :size="size" :noHover="noHover">
    <path
      d="M25 0A25 25 0 0 0 0 25a25 25 0 0 0 25 25 25 25 0 0 0 25-25A25 25 0 0 0 25 0zM13 12.5h8v25h-8v-25zm16 0h8v25h-8v-25z"
    />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'
import BIconMixin from '../../mixins/BIcon'

export default {
  name: 'b-icon-pause',
  mixins: [BIconMixin],
  components: {
    BIcon,
  },
}
</script>
