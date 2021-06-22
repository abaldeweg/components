<template>
  <div class="tabs-link">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-tabs-link',
}
</script>

<style scoped>
.tabs-link {
  border-bottom: 2px solid transparent;
  text-align: center;
  padding: 10px;
  color: var(--color-neutral-10);
}
.tabs-link a,
.tabs-link a:hover {
  color: var(--color-neutral-10);
}
.tabs-link:hover {
  background: var(--color-neutral-02);
  border-bottom: 3px solid var(--color-primary-10);
}
</style>
