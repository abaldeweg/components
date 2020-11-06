<template>
  <div class="tab-link">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-tab-link',
}
</script>

<style scoped>
.tab-link {
  border-bottom: 2px solid transparent;
  text-align: center;
  padding: 10px;
  margin-right: 20px;
}
.tab-link:hover {
  border-bottom: 2px solid var(--color-primary-10);
}
</style>
