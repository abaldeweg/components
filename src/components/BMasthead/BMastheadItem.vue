<template>
  <div
    class="masthead-item"
    :class="{
      canGrow: grow,
      canShrink: shrink,
      isCentered: center,
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
    center: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.masthead-item {
  display: flex;
  justify-content: flex-start;
  max-width: 150px;
  margin: 0 10px;
  line-height: 1;
}
.masthead-item.isCentered {
  justify-content: center;
}

@media all and (min-width: 320px) {
  .masthead-item.canGrow {
    flex-grow: 1;
  }
}
@media all and (min-width: 600px) {
  .masthead-item {
    max-width: 200px;
  }
}
</style>
