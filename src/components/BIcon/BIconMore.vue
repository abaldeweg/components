<template>
  <b-icon :size="size" :noHover="noHover">
    <path
      d="M 0,31 H 11.904297 V 19 H 0 Z m 19.046875,0 11.90625,0 0,-12 -11.90625,0 z m 19.048828,0 H 50 V 19 H 38.095703 Z"
    />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'
import BIconMixin from '../../mixins/BIcon'

export default {
  name: 'b-icon-more',
  mixins: [BIconMixin],
  components: {
    BIcon,
  },
}
</script>
