<template>
  <div class="offcanvas">
    <div class="offcanvas_overlay" @click="$emit('toggleMenu')"></div>
    <div class="offcanvas_container">
      <div class="offcanvas_header">
        <button class="offcanvas_close" @click="$emit('toggleMenu')">
          <b-icon-close />
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import BIconClose from '../BIcon/BIconClose'

export default {
  name: 'b-off-canvas',
  components: {
    BIconClose
  }
}
</script>

<style scoped>
/* Overlay */
.offcanvas_overlay {
  visibility: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-neutral-00);
  opacity: 0;
  transition: visibility 0.2s, opacity 0.2s;
  z-index: 2;
}
.offcanvas_overlay.isActive {
  visibility: visible;
  opacity: 0.7;
}
.offcanvas_close {
  display: inline-block;
  border: 0;
  background: transparent;
  padding: 5px 10px;
  margin: 0;
  cursor: pointer;
}
/* Container */
.offcanvas_container {
  display: block;
  visibility: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: -300px;
  border-right: 1px solid var(--color-neutral-04);
  background: var(--color-neutral-00);
  width: 300px;
  transition: visibility 0.2s, left 0.2s;
  z-index: 4;
}
.offcanvas_container.isActive {
  visibility: visible;
  left: 0;
}
.offcanvas_header {
  border-bottom: 1px solid var(--color-neutral-04);
  height: var(--masthead-height);
  min-height: 50px;
}
.offcanvas_container .icon {
  margin: 5px 0 0 20px;
}
.offcanvas_nav {
  padding: 0;
  margin: 0;
  list-style: none;
}
.offcanvas_item {
  margin: 10px 20px;
  font-size: 1.2em;
}
.offcanvas_link {
  color: var(--color-neutral-06);
}
.offcanvas_link:hover,
.offcanvas_link:focus {
  outline: 0;
  color: var(--color-neutral-10);
}

@media print {
  .offcanvas_overlay,
  .offcanvas_container {
    display: none;
  }
}
</style>
