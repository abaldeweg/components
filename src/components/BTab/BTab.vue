<template>
  <div class="tab">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-tab',
}
</script>

<style scoped>
.tab {
  display: flex;
  justify-content: flex-start;
}
</style>
