<template>
  <li class="links-link">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'b-links-link',
}
</script>

<style scoped>
.links-link {
  display: inline;
  margin-right: 20px;
}
</style>
