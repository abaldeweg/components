<template>
  <li class="contextMenu_item">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'b-context-menu-item'
}
</script>

<style scoped>
.contextMenu_item {
  padding: 5px 20px;
  cursor: pointer;
}
.contextMenu_item:hover {
  background: var(--color-neutral-02);
}
.contextMenu a,
.contextMenu a:hover {
  display: block;
  width: 100%;
  color: var(--color-neutral-10);
}
.contextMenu_btn {
  border: 0;
  background: transparent;
  padding: 0;
  width: 100%;
  text-align: left;
  color: var(--color-neutral-10);
  font-family: var(--font-sans);
  font-size: 1em;
  cursor: pointer;
}
</style>
