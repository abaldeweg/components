<template>
  <b-icon :size="size">
    <path
      d="M 44.703125 4 L 18.613281 35.955078 L 4.4453125 23.697266 L 0 29.138672 L 14.169922 41.398438 L 14.140625 41.433594 L 19.4375 46 L 50 8.5664062 L 44.703125 4 z "
    />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'
import BIconMixin from '../../mixins/BIcon'

export default {
  name: 'b-icon-done',
  mixins: [BIconMixin],
  components: {
    BIcon,
  },
}
</script>
