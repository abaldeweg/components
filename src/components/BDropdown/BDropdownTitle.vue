<template>
  <h3 class="dropdown-title"><slot /></h3>
</template>

<script>
export default {
  name: 'b-dropdown-title',
}
</script>

<style scoped>
.dropdown-title {
  font-size: 1rem;
  font-family: var(--font-sans);
  font-weight: bold;
  padding: 5px 20px;
}
</style>
