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
      default: 'l',
      validation: function(value) {
        return ['l', 'm', 's'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    variations: function() {
      return {
        container_l: this.size === 'l',
        container_m: this.size === 'm',
        container_s: this.size === 's'
      }
    }
  }
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
</style>
