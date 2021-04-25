<template>
  <article class="scroll-to-bottom" :style="style">
    <slot />
  </article>
</template>

<script>
export default {
  name: 'scroll-to-bottom',
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isScrolledToBottom: true,
    }
  },
  computed: {
    style() {
      return {
        width: this.width !== 0 ? this.width + 'px' : null,
        height:
          this.height !== 0
            ? this.height + 'px'
            : 'calc(100vh - var(--masthead-height))',
      }
    },
  },
  methods: {
    scrollToBottom() {
      if (!this.isScrolledToBottom) return
      let container = this.$el
      container.scrollTop = container.scrollHeight
    },
  },
  mounted() {
    this.scrollToBottom()
  },
  beforeUpdate() {
    let container = this.$el
    this.isScrolledToBottom =
      container.scrollHeight - container.clientHeight <= container.scrollTop
  },
  updated() {
    this.scrollToBottom()
  },
}
</script>

<style scoped>
.scroll-to-bottom {
  overflow-y: scroll;
}
</style>
