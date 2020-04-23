<template>
  <b-icon :size="size">
    <path
      d="M 50,5.7851248 30.81956,24.965565 50,44.146007 44.146007,50 24.965565,30.81956 5.7851242,50 0,44.214876 19.180441,25.034436 0,5.8539942 5.8539944,3.4422067e-7 25.034436,19.180441 44.214876,0 Z"
    />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'
import BIconMixin from '../../mixins/BIcon'

export default {
  name: 'b-icon-close',
  mixins: [BIconMixin],
  components: {
    BIcon,
  },
}
</script>
