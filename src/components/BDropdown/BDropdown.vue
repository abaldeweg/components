<template>
  <article>
    <span @click="showDropdown" v-if="$slots.selector" ref="selector">
      <slot name="selector" />
    </span>
    <div
      class="dropdown_overlay"
      :class="{
        isActive: show,
      }"
      @click="hideDropdown"
    />
    <ul
      class="dropdown"
      :class="{
        isActive: show,
      }"
      :style="style"
      ref="dropdown"
    >
      <slot />
    </ul>
  </article>
</template>

<script>
export default {
  name: 'b-dropdown',
  props: {
    position: {
      type: String,
      default: 'selector',
      validator: function (value) {
        return ['selector', 'mouse'].indexOf(value) !== -1
      },
    },
  },
  data() {
    return {
      show: false,
      top: 0,
      left: 0,
    }
  },
  computed: {
    style: function () {
      return {
        top: this.top,
        left: this.left,
      }
    },
  },
  methods: {
    hideDropdown: function () {
      this.show = false
    },
    showDropdown: function (event) {
      this.show = true
      this.$refs.dropdown.style.display = 'block'

      const position = this.$refs.selector.getBoundingClientRect()
      const selectorY = position.y
      const selectorX = position.x
      const selectorWidth = this.$refs.selector.offsetWidth
      const selectorHeight = this.$refs.selector.offsetHeight
      const clickY = event.clientY
      const clickX = event.clientX
      const clientWidth = window.innerWidth
      const clientHeight = window.innerHeight
      const dimensionWidth = this.$refs.dropdown.offsetWidth
      const dimensionHeight = this.$refs.dropdown.offsetHeight

      this.$refs.dropdown.style.display = null

      if (this.flex) {
        this.left = clickX + 'px'
        if (clickX + dimensionWidth > clientWidth) {
          this.left = clickX - dimensionWidth + 'px'
        }
        this.top = clickY + 'px'
        if (clickY + dimensionHeight > clientHeight) {
          this.top = clickY - dimensionHeight + 'px'
        }
        return
      }

      this.left = selectorX + 'px'
      if (selectorX + dimensionWidth > clientWidth) {
        this.left = selectorX - dimensionWidth + selectorWidth + 'px'
      }
      this.top = selectorY + 'px'
      if (selectorY + dimensionHeight > clientHeight) {
        this.top = selectorY - dimensionHeight + selectorHeight + 'px'
      }
    },
  },
}
</script>

<style scoped>
.dropdown {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 200px;
  max-width: 90%;
  border: 1px solid var(--color-neutral-06);
  background: var(--color-neutral-00);
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
}
.dropdown_overlay {
  display: none;
}
.dropdown_overlay.isActive {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}
.dropdown.isActive {
  display: block;
}

@media all and (min-width: 400px) {
  .dropdown {
    max-width: 350px;
  }
}
</style>
