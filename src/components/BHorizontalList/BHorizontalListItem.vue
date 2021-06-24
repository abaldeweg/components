<template>
  <div
    class="horizontal-list-item"
    :class="{
      'horizontal-list-item_s': size === 's',
      'horizontal-list-item_m': size === 'm',
      'horizontal-list-item_l': size === 'l',
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-horizontal-list-item',
  props: {
    size: {
      type: String,
      default: 'm',
      validator(value) {
        return ['s', 'm', 'l'].indexOf(value) !== -1
      },
    },
  },
}
</script>

<style scoped>
.horizontal-list-item {
  display: block;
  flex-grow: 1;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
.horizontal-list-item_s {
  min-width: 200px;
}
.horizontal-list-item_m {
  min-width: 300px;
}
.horizontal-list-item_l {
  min-width: 500px;
}
</style>
