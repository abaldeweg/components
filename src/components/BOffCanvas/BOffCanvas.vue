<template>
  <div class="offcanvas">
    <div
      class="offcanvas_overlay"
      :class="{ isActive: active }"
      @click="closeMenu"
      v-if="!fixed"
    ></div>
    <div class="offcanvas_container" :class="{ isActive: active }">
      <div class="offcanvas_header" v-if="!fixed">
        <button class="offcanvas_close" @click="closeMenu">
          <b-icon type="close" />
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import BIcon from '../BIcon/BIcon'

export default {
  name: 'b-off-canvas',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BIcon,
  },
  data() {
    return {
      x: null,
      y: null,
    }
  },
  methods: {
    openMenu: function () {
      this.$emit('open-menu')
    },
    closeMenu: function () {
      this.$emit('close-menu')
    },
    startTouch: function (e) {
      this.x = e.touches[0].clientX
      this.y = e.touches[0].clientY
    },
    moveTouch: function (e) {
      var xDiff = this.x - e.touches[0].clientX
      var yDiff = this.y - e.touches[0].clientY
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          this.closeMenu()
        } else {
          this.openMenu()
        }
      }
    },
  },
  watch: {
    show: function (value) {
      value ? (this.active = true) : (this.active = false)
    },
  },
  mounted: function () {
    window.addEventListener('touchstart', this.startTouch)
    window.addEventListener('touchmove', this.moveTouch)
    if (this.fixed) {
      this.openMenu()
      document.body.classList.add('isSidebarFixed')
    }
  },
  destroyed: function () {
    window.removeEventListener('touchstart', this.startTouch)
    window.removeEventListener('touchmove', this.moveTouch)
  },
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
  border-right: 1px solid var(--color-neutral-02);
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
  border-bottom: 1px solid var(--color-neutral-02);
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
