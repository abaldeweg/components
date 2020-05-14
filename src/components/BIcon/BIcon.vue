<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 50 50"
    class="icon"
    :class="{ noHover: noHover }"
  >
    <path :d="path" />
  </svg>
</template>

<script>
import icon from '../../services/icons'
import validator from '../../services/validator'

const icons = [
  'apps',
  'bin',
  'bookmark',
  'close',
  'done',
  'download',
  'filter',
  'menu',
  'minus',
  'pause',
  'pencil',
  'play',
  'plus',
  'profile',
  'settings',
  'more',
  'sleeptimer',
]

export default {
  name: 'b-icon',
  props: {
    type: {
      type: String,
      required: true,
      validator: function (value) {
        return validator.choices(icons, value)
      },
    },
    size: {
      type: Number,
      default: 25,
    },
    noHover: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    path: function () {
      return icon(this.type)
    },
  },
}
</script>

<style scoped>
.icon {
  fill: var(--color-neutral-06);
  transition: fill 0.2s;
}
.icon:hover {
  fill: var(--color-neutral-10);
}
.icon.noHover:hover {
  fill: var(--color-neutral-06);
}
</style>
