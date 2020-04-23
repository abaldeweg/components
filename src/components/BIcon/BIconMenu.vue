<template>
  <b-icon :size="size" :noHover="noHover">
    <path d="M0 3h50v8.8H0zM0 38.2h50V47H0zM0 20.6h50v8.8H0z" />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'
import BIconMixin from '../../mixins/BIcon'

export default {
  name: 'b-icon-icon',
  mixins: [BIconMixin],
  components: {
    BIcon,
  },
}
</script>
