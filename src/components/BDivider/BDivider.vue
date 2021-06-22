<template>
  <hr
    class="divider"
    :class="{
      divider_l: size === 'l',
      divider_m: size === 'm',
      divider_s: size === 's',
      divider_xs: size === 'xs',
    }"
  />
</template>

<script>
import validator from '../../services/validator'

export default {
  name: 'b-divider',
  props: {
    size: {
      type: String,
      default: 'l',
      validator(value) {
        return validator.choices(['l', 'm', 's', 'xs'], value)
      },
    },
  },
}
</script>

<style scoped>
.divider {
  border: 0 hidden;
  border-top: 1px solid var(--color-neutral-02);
}
.divider_l {
  width: 100%;
}
.divider_m {
  max-width: 1160px;
}
.divider_s {
  max-width: 600px;
}
.divider_xs {
  max-width: 100px;
}
</style>
