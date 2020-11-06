<template>
  <ul class="links">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'b-links',
}
</script>

<style scoped>
.links {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
