<template>
  <div class="badge">
    <slot />
    <div class="badge_content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'b-badge',
  props: {
    content: String,
  },
}
</script>

<style scoped>
.badge {
  display: inline-block;
}
.badge_content {
  position: relative;
  display: inline-block;
  background: var(--color-primary-10);
  border-radius: 10px;
  padding: 0 5px;
  top: -15px;
  font-size: 0.7rem;
}
</style>
