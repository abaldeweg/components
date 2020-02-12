<template>
  <div class="slider">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-slider'
}
</script>

<style scoped>
.slider {
  width: auto;
  height: 230px;
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
}
</style>
