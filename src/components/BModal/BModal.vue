<template>
  <div class="modal">
    <div class="modal_overlay" />
    <div class="modal_inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-modal',
}
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.modal_overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: var(--color-neutral-00);
  width: 100%;
  height: 100%;
  opacity: 0.8;
}
.modal_inner {
  position: relative;
  border: 1px solid var(--color-neutral-02);
  background: var(--color-neutral-00);
  max-width: 600px;
  margin: auto;
  margin-top: var(--masthead-height);
  box-sizing: border-box;
}
</style>
