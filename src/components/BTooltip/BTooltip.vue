<template>
  <div class="tooltip">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'b-tooltip',
  data() {
    return {
      title: 'Title',
      spacing: 10,
      config: null,
    }
  },
  methods: {
    calcTop: function () {
      let top = this.config.triggerY
      const position = this.config.position
      const tooltipHeight = this.$el.offsetHeight

      if (position === 'top') {
        return top - this.spacing - tooltipHeight
      }
      if (position === 'bottom') {
        return top + this.spacing + this.config.triggerHeight
      }
      if (position === 'left' || position === 'right') {
        return top + this.config.triggerHeight / 2 - tooltipHeight / 2
      }

      return top
    },
    calcLeft: function () {
      let left = this.config.triggerX
      const position = this.config.position
      const tooltipWidth = this.$el.offsetWidth

      if (position === 'top' || position === 'bottom') {
        return left + this.config.triggerWidth / 2 - tooltipWidth / 2
      }
      if (position === 'left') {
        return left - this.spacing - tooltipWidth
      }
      if (position === 'right') {
        return left + this.spacing + this.config.triggerWidth
      }

      return left
    },
    open: function (config) {
      this.config = config
      this.title = config.title

      this.$el.style.display = 'block'
      this.$el.style.top = this.calcTop() + 'px'
      this.$el.style.left = this.calcLeft() + 'px'
    },
    close: function () {
      this.$el.style.display = 'none'
    },
  },
  created: function () {
    this.$root.$on('open-tooltip', (config) => this.open(config))
    this.$root.$on('close-tooltip', () => this.close())
  },
}
</script>

<style scoped>
.tooltip {
  display: none;
  position: fixed;
  border: 1px solid var(--color-neutral-02);
  border-radius: 5px;
  background: var(--color-neutral-00);
  color: var(--color-neutral-10);
  padding: 5px 10px;
}
</style>
