<template>
  <div class="toast" v-if="state.isVisible">
    <div
      class="toast_inner"
      :class="{
        toast_error: type === 'error',
        toast_warning: type === 'warning',
        toast_success: type === 'success',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from '@vue/composition-api'

export default {
  name: 'b-toast',
  props: {
    type: {
      type: String,
      validator: (value) => {
        return ['neutral', 'error', 'warning', 'success'].indexOf(value) !== -1
      },
      default: 'neutral',
    },
  },
  setup() {
    const state = reactive({
      isVisible: false,
    })

    const show = () => {
      state.isVisible = true
      window.setTimeout(() => {
        state.isVisible = false
      }, 5000)
    }

    return { state, show }
  },
}
</script>

<style scoped>
.toast {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  z-index: 6;
}
.toast_inner {
  border-radius: 5px;
  background: var(--color-neutral-02);
  max-width: 400px;
  padding: 5px 10px;
  margin: auto;
  box-sizing: border-box;
}
.toast_error {
  border-left: 5px solid var(--color-accent-red-10);
}
.toast_warning {
  border-left: 5px solid var(--color-accent-yellow-10);
}
.toast_success {
  border-left: 5px solid var(--color-accent-green-10);
}
</style>
