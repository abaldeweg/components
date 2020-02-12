<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 50 50"
    class="icon"
  >
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'b-icon'
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
