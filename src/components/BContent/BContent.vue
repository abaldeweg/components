<template>
  <main class="content">
    <slot />
  </main>
</template>

<script>
export default {
  name: 'b-content',
}
</script>

<style scoped>
.content {
  display: block;
  clear: both;
  margin-top: var(--masthead-height);
  z-index: 1;
}
.isSidebarFixed .content {
  margin-left: 300px;
}
</style>
