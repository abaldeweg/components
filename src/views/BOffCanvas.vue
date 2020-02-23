<template>
  <section class="container container_m">
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <button @click="toggleMenu">Menu</button>

    <b-off-canvas @toggleMenu="toggleMenu">
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
  methods: {
    toggleMenu: function() {
      document
        .querySelector('.offcanvas_container')
        .classList.toggle('isActive')
      document.querySelector('.offcanvas_overlay').classList.toggle('isActive')
    }
  }
}
</script>
