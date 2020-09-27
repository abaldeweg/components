<template>
  <div
    class="masthead-item"
    :class="{
      'masthead-item_start': 'start' === type,
      'masthead-item_center': 'center' === type,
      'masthead-item_end': 'end' === type,
    }"
  >
    <slot />
  </div>
</template>

<script>
import validator from '../../services/validator'

export default {
  name: 'masthead-item',
  props: {
    type: {
      type: String,
      default: 'start',
      validator: function (value) {
        return validator.choices(['start', 'center', 'end'], value)
      },
    },
  },
}
</script>

<style scoped>
.masthead-item {
  max-width: 150px;
  line-height: 1;
  flex-grow: 1;
}
.masthead-item:first-child {
  margin-left: 20px;
}
.masthead-item:last-child {
  margin-right: 20px;
}
.masthead-item_start {
  text-align: left;
}
.masthead-item_center {
  text-align: center;
}
.masthead-item_end {
  text-align: right;
}

@media all and (min-width: 600px) {
  .masthead-item {
    max-width: initial;
  }
}
</style>
