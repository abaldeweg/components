<template>
  <div class="modal">
    <div class="modal_overlay" @click.prevent="close" />

    <div class="modal_inner" :style="{ maxWidth: width + 'px' }">
      <div class="modal_header">
        <span class="modal_close" @click="close" v-if="closeButton">
          <b-icon type="close" :size="20" />
        </span>
        <h1 class="modal_title" v-if="$slots.title"><slot name="title" /></h1>
      </div>

      <div class="modal_body">
        <slot />
      </div>

      <div class="modal_footer" v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
import BIcon from '../BIcon/BIcon'

export default {
  name: 'b-modal',
  props: {
    width: {
      type: Number,
      default: 600,
    },
    closeButton: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    BIcon,
  },
  methods: {
    close() {
      this.$emit('close')
      document.body.classList.remove('isModalOpen')
    },
  },
  mounted() {
    document.body.classList.add('isModalOpen')
  },
  beforeDestroy() {
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
  z-index: 4;
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
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid var(--color-neutral-02);
  border-radius: 5px;
  background: var(--color-neutral-00);
  height: calc(100vh - 120px);
  margin: 60px auto;
  box-sizing: border-box;
}
.modal_header {
  border-bottom: 1px solid var(--color-neutral-02);
  padding: 20px;
}
.modal_body {
  flex-grow: 1;
  height: calc(100vh - 90px);
  overflow-y: auto;
}
.modal_footer {
  border-top: 1px solid var(--color-neutral-02);
  padding: 20px;
}
.modal_title {
  font-size: 1.2rem;
}
.modal_close {
  float: right;
}
</style>
