<template>
  <div class="toast" v-if="state.isVisible">
    <div class="toast_inner">
      <slot />
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from '@vue/composition-api'

export default {
  name: 'b-toast',
  setup() {
    const state = reactive({
      isVisible: true,
    })

    const show = () => {
      state.isVisible = true
      window.setTimeout(() => {
        state.isVisible = false
      }, 5000)
    }

    onMounted(() => {
      state.isVisible = false
    })

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
}
.toast_inner {
  border-radius: 5px;
  background: var(--color-neutral-02);
  max-width: 400px;
  padding: 5px 10px;
  margin: auto;
  box-sizing: border-box;
}
</style>
