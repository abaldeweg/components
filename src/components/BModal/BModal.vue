<template>
  <div class="modal">
    <div class="modal_overlay" @click.prevent="close" />
    <div class="modal_inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-modal',
  methods: {
    close: function () {
      this.$emit('close')
      document.body.classList.remove('isModalOpen')
    },
  },
  created: function () {
    document.body.classList.add('isModalOpen')
  },
  beforeDestroy: function () {
    document.body.classList.remove('isModalOpen')
  },
}
</script>

<style scoped>
.modal {
  position: fixed;
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
  height: calc(100vh - var(--masthead-height));
  margin: auto;
  margin-top: var(--masthead-height);
  box-sizing: border-box;
  overflow-y: auto;
}
</style>
