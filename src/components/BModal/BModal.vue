<template>
  <div class="modal">
    <div class="modal_overlay" @click.prevent="close" />
    <div class="modal_inner" :style="{ maxWidth: width + 'px' }">
      <span class="modal_close" @click="close" v-if="closeButton">
        <b-icon type="close" :size="20" />
      </span>
      <slot />
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
    close: function () {
      this.$emit('close')
      document.body.classList.remove('isModalOpen')
    },
  },
  mounted: function () {
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
  position: relative;
  border: 1px solid var(--color-neutral-02);
  border-radius: 5px;
  background: var(--color-neutral-00);
  height: calc(100vh - 20px);
  margin: auto;
  margin: 10px auto;
  box-sizing: border-box;
  overflow-y: auto;
}
.modal_inner::-webkit-scrollbar-track-piece {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.modal_close {
  float: right;
  margin: 10px;
}
</style>
