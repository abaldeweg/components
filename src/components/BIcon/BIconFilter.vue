<template>
  <b-icon :size="size">
    <path
      d="m 5,0 10,16.25 6.666667,10.83252 V 42.5 46.25 50 L 25,48.125 28.333333,46.25 V 27.08252 L 35,16.25 45,0 H 25 Z"
    />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'
import BIconMixin from '../../mixins/BIcon'

export default {
  name: 'b-icon-filter',
  mixins: [BIconMixin],
  components: {
    BIcon,
  },
}
</script>
