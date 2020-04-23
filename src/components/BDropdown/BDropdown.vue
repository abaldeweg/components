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
      :style="position"
    >
      <slot />
    </ul>
  </article>
</template>

<script>
export default {
  name: 'b-dropdown',
  props: {
    flex: {
      type: Boolean,
      default: false,
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
    position: function () {
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
      if (this.flex) {
        this.left = event.pageX - 200 + 'px'
        if (event.pageX < 200) {
          this.left = event.pageX + 'px'
        }
        this.top = event.pageY + 'px'
        this.show = true
        return
      }

      const position = this.$refs.selector.getBoundingClientRect()
      this.left = position.x - 200 + 'px'
      if (position.x < 200) {
        this.left = position.x + 'px'
      }
      this.top = position.y + 'px'
      this.show = true
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
