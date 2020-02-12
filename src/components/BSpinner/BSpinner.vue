<template>
  <div
    :class="{
      spinner: true,
      spinner_l: size === 'l',
      spinner_m: size === 'm',
      spinner_s: size === 's'
    }"
  ></div>
</template>

<script>
export default {
  name: 'b-spinner',
  props: {
    size: {
      default: 'l',
      validator: function(value) {
        return ['l', 'm', 's'].indexOf(value) !== -1
      }
    }
  }
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
  border-left: 2px solid var(--color-neutral-00);
  border-right: 2px solid var(--color-neutral-00);
  width: 20px;
  height: 20px;
}
.spinner_m {
  border-top: 4px solid var(--color-primary-10);
  border-bottom: 4px solid var(--color-primary-10);
  border-left: 4px solid var(--color-neutral-00);
  border-right: 4px solid var(--color-neutral-00);
  width: 40px;
  height: 40px;
}
.spinner_l {
  border-top: 6px solid var(--color-primary-10);
  border-bottom: 6px solid var(--color-primary-10);
  border-left: 6px solid var(--color-neutral-00);
  border-right: 6px solid var(--color-neutral-00);
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
