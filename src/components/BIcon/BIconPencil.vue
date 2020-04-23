<template>
  <b-icon :size="size" :noHover="noHover">
    <path
      d="M 0,37.037173 V 50 H 12.962964 L 18.51852,44.444565 50,12.963044 37.037039,0 5.5555562,31.481739 Z m 9.2592609,1.851523 29.6296311,-29.6289134 3.7037,3.7032614 -29.629628,29.629565 z"
    />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'
import BIconMixin from '../../mixins/BIcon'

export default {
  name: 'b-icon-pencil',
  mixins: [BIconMixin],
  components: {
    BIcon,
  },
}
</script>
