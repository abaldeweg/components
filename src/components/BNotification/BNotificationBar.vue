<template>
  <div class="notification-bar" :class="cssClass">
    <slot />
  </div>
</template>

<script>
import validator from '../../services/validator'

export default {
  name: 'b-notification-bar',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return validator.choices(['top', 'bottom'], value)
      },
    },
  },
  computed: {
    cssClass() {
      return 'notification-bar-' + this.position
    },
  },
}
</script>

<style scoped>
.notification-bar {
  position: fixed;
  left: 0;
  width: 100%;
  max-width: 600px;
}
.notification-bar-top {
  top: var(--masthead-height);
}
.notification-bar-bottom {
  bottom: 0;
}

@media all and (min-width: 500px) {
  .notification-bar {
    left: 50%;
    margin-left: -300px;
  }
}
</style>
