<template>
  <div class="table">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-table',
}
</script>

<style scoped>
.table {
  overflow: auto;
}
</style>
