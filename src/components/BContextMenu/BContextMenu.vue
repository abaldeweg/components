<template>
  <ul class="contextMenu">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'b-context-menu'
}
</script>

<style scoped>
.contextMenu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  border: 1px solid var(--color-neutral-06);
  background: var(--color-neutral-00);
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
