<template>
  <b-icon :size="size" :noHover="noHover">
    <path
      d="M 0,0 V 10.525391 H 10.525391 V 0 Z M 19.736328,0 V 10.525391 H 30.263672 V 0 Z M 39.474609,0 V 10.525391 H 50 V 0 Z M 0,19.736328 V 30.263672 H 10.525391 V 19.736328 Z m 19.736328,0 V 30.263672 H 30.263672 V 19.736328 Z m 19.738281,0 V 30.263672 H 50 V 19.736328 Z M 0,39.472656 V 50 H 10.525391 V 39.472656 Z m 19.736328,0 V 50 H 30.263672 V 39.472656 Z m 19.738281,0 V 50 H 50 V 39.472656 Z"
    />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'
import BIconMixin from '../../mixins/BIcon'

export default {
  name: 'b-icon-apps',
  mixins: [BIconMixin],
  components: {
    BIcon,
  },
}
</script>
