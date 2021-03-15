<template>
  <section class="container" :class="variations">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'b-container',
  props: {
    size: {
      type: String,
      default: 'l',
      validator: function(value) {
        return ['l', 'm', 's'].indexOf(value) !== -1
      },
    },
    align: {
      type: String,
      default: 'left',
      validator: function(value) {
        return ['left', 'right', 'center'].indexOf(value) !== -1
      },
    },
  },
  computed: {
    variations: function() {
      return {
        container_l: this.size === 'l',
        container_m: this.size === 'm',
        container_s: this.size === 's',
        container_right: this.align === 'right',
        container_center: this.align === 'center',
      }
    },
  },
}
</script>

<style scoped>
.container {
  clear: both;
  letter-spacing: 0.3px;
  padding: 20px;
  margin: auto;
  box-sizing: border-box;
}
.container::after {
  content: '';
  display: table;
  clear: both;
}
.container_l {
  width: 100%;
}
.container_m {
  max-width: 1160px;
}
.container_s {
  max-width: 600px;
}
.container_right {
  text-align: right;
}
.container_center {
  text-align: center;
}
</style>
