<template>
  <b-icon :size="size" :noHover="noHover">
    <path
      d="M28.254 0v21.707h21.707v6.625H28.254v21.707h-6.547V28.332H0v-6.625h21.707V0z"
    />
  </b-icon>
</template>

<script>
import BIcon from './BIcon'
import BIconMixin from '../../mixins/BIcon'

export default {
  name: 'b-icon-plus',
  mixins: [BIconMixin],
  components: {
    BIcon,
  },
}
</script>
