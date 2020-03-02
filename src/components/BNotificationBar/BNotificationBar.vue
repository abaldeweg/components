<template>
  <div class="notification-bar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-notification-bar'
}
</script>

<style scoped>
.notification-bar {
  position: fixed;
  left: 0;
  top: var(--masthead-height);
  width: 100%;
  max-width: 600px;
}

@media all and (min-width: 500px) {
  .notification-bar {
    left: 50%;
    margin-left: -300px;
  }
}
</style>
