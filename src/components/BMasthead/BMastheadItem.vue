<template>
  <div
    class="masthead-item"
    :class="{
      canGrow: grow,
      canShrink: shrink,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'masthead-item',
  props: {
    grow: {
      type: Boolean,
      default: false,
    },
    shrink: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.masthead-item {
  display: flex;
  justify-content: flex-end;
  max-width: 45px;
}
.masthead-item.canShrink {
  max-width: 150px;
}

@media all and (min-width: 320px) {
  .masthead-item.canGrow {
    flex-grow: 1;
    max-width: 150px;
  }
}
</style>
