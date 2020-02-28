<template>
  <li class="dropdown_item">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'b-dropdown-item'
}
</script>

<style scoped>
.dropdown_item {
  padding: 5px 20px;
  cursor: pointer;
}
.dropdown_item:hover {
  background: var(--color-neutral-02);
}
.dropdown a,
.dropdown a:hover {
  display: block;
  width: 100%;
  color: var(--color-neutral-10);
}
.dropdown_btn {
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
