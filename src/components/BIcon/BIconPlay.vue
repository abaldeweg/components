<template>
  <b-icon :size="size" :noHover="noHover">
    <path
      d="M25 0A25 25 0 0 0 0 25a25 25 0 0 0 25 25 25 25 0 0 0 25-25A25 25 0 0 0 25 0zm-8.5 10.5l25 15-25 15v-30z"
    />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'
import BIconMixin from '../../mixins/BIcon'

export default {
  name: 'b-icon-play',
  mixins: [BIconMixin],
  components: {
    BIcon,
  },
}
</script>
