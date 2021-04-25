<template>
  <div class="spinner" :class="variations" />
</template>

<script>
import validator from '../../services/validator'

export default {
  name: 'b-spinner',
  props: {
    size: {
      default: 'l',
      validator(value) {
        return validator.choices(['l', 'm', 's'], value)
      },
    },
  },
  computed: {
    variations() {
      return {
        spinner_l: this.size === 'l',
        spinner_m: this.size === 'm',
        spinner_s: this.size === 's',
      }
    },
  },
}
</script>

<style scoped>
.spinner {
  border-radius: 50%;
  animation: spinner 3s linear infinite;
}
.spinner_s {
  border-top: 2px solid var(--color-primary-10);
  border-bottom: 2px solid var(--color-primary-10);
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  width: 20px;
  height: 20px;
}
.spinner_m {
  border-top: 4px solid var(--color-primary-10);
  border-bottom: 4px solid var(--color-primary-10);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  width: 40px;
  height: 40px;
}
.spinner_l {
  border-top: 6px solid var(--color-primary-10);
  border-bottom: 6px solid var(--color-primary-10);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  width: 60px;
  height: 60px;
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
