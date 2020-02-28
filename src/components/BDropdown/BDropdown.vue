<template>
  <article>
    <span @click="toggleDropdown" v-if="$slots.selector">
      <slot name="selector" />
    </span>
    <div
      class="dropdown_overlay"
      :class="{
        isActive: showDropdown
      }"
      @click="hideDropdown"
    />
    <ul
      class="dropdown"
      :class="{
        isActive: showDropdown
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
  data() {
    return {
      showDropdown: false,
      top: 0,
      left: 0
    }
  },
  computed: {
    position: function() {
      return {
        top: this.top,
        left: this.left
      }
    }
  },
  methods: {
    hideDropdown: function() {
      this.showDropdown = false
    },
    toggleDropdown: function(event) {
      if (false === this.showDropdown) {
        this.left = event.pageX - 200 + 'px'
        if (event.pageX < 200) {
          this.left = event.pageX + 'px'
        }
        this.top = event.pageY + 'px'
        this.showDropdown = true
      } else {
        this.showDropdown = false
      }
    }
  }
}
</script>

<style scoped>
.dropdown {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
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
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}
.dropdown.isActive {
  display: block;
}
</style>
