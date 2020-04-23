<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 50 50"
    class="icon"
  >
    <slot />
  </svg>
</template>

<script>
import BIconMixin from '../../mixins/BIcon'

export default {
  name: 'b-icon',
  mixins: [BIconMixin],
}
</script>

<style scoped>
.icon {
  fill: var(--color-neutral-06);
  transition: fill 0.2s;
}
.icon:hover {
  fill: var(--color-neutral-10);
}
</style>
