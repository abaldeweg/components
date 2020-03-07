<template>
  <section class="container container_m">
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <button @click="openMenu">Menu</button>

    <b-off-canvas @close-menu="closeMenu">
      <ul class="offcanvas_nav">
        <li class="offcanvas_item">
          <a href="/" class="offcanvas_link">Item 1</a>
        </li>
        <li class="offcanvas_item">
          <a href="/" class="offcanvas_link">Item 2</a>
        </li>
        <li class="offcanvas_item">
          <a href="/" class="offcanvas_link">Item 3</a>
        </li>
      </ul>
      <b-divider />
      <ul class="offcanvas_nav">
        <li class="offcanvas_item">
          <a href="/" class="offcanvas_link">Item 1</a>
        </li>
        <li class="offcanvas_item">
          <a href="/" class="offcanvas_link">Item 2</a>
        </li>
        <li class="offcanvas_item">
          <a href="/" class="offcanvas_link">Item 3</a>
        </li>
      </ul>
    </b-off-canvas>
  </section>
</template>

<script>
import BOffCanvas from '../components/BOffCanvas/BOffCanvas'
import BDivider from '../components/BDivider/BDivider'

export default {
  name: 'b-off-canvas-view',
  components: {
    BOffCanvas,
    BDivider
  },
  data() {
    return {
      x: null,
      y: null
    }
  },
  methods: {
    openMenu: function() {
      document.querySelector('.offcanvas_container').classList.add('isActive')
      document.querySelector('.offcanvas_overlay').classList.add('isActive')
    },
    closeMenu: function() {
      document
        .querySelector('.offcanvas_container')
        .classList.remove('isActive')
      document.querySelector('.offcanvas_overlay').classList.remove('isActive')
    },
    startTouch: function(e) {
      this.x = e.touches[0].clientX
      this.y = e.touches[0].clientY
    },
    moveTouch: function(e) {
      var xDiff = this.x - e.touches[0].clientX
      var yDiff = this.y - e.touches[0].clientY
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          this.closeMenu()
        } else {
          this.openMenu()
        }
      }
      this.x = null
      this.y = null
    }
  },
  mounted: function() {
    window.addEventListener('touchstart', this.startTouch)
    window.addEventListener('touchmove', this.moveTouch)
  },
  destroyed: function() {
    window.removeEventListener('touchstart', this.startTouch)
    window.removeEventListener('touchmove', this.moveTouch)
  }
}
</script>
