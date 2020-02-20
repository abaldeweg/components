<template>
  <div class="notification-bar">
    <slot />
  </div>
</template>

<style scoped>
.notification-bar {
  width: 100%;
  max-width: 600px;
  position: fixed;
  left: 0;
  top: var(--masthead-height);
}

@media all and (min-width: 500px) {
  .notification-bar {
    left: 50%;
    margin-left: -250px;
  }
}
</style>

<script>
export default {
  name: 'notification-bar'
}
</script>
