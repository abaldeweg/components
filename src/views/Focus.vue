<template>
  <input type="text" v-focus />
</template>

<script>
import Focus from '../directives/focus'

export default {
  name: 'focus-view',
  directives: {
    Focus,
  },
}
</script>
