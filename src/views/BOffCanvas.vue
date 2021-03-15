<template>
  <b-container size="m">
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <button @click="openMenu">Menu</button>

    <b-off-canvas :active="show" @open-menu="openMenu" @close-menu="closeMenu">
      <template #logo>
        <router-link :to="{ name: 'masthead' }">
          <img
            v-holder="{ img: '200x50', auto: 'yes', bg: '#ff0000' }"
            alt="baldeweg/components"
          />
        </router-link>
      </template>
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
  </b-container>
</template>

<script>
import BOffCanvas from '../components/BOffCanvas/BOffCanvas'
import BDivider from '../components/BDivider/BDivider'
import BContainer from '../components/BContainer/BContainer'

export default {
  name: 'b-off-canvas-view',
  components: {
    BOffCanvas,
    BDivider,
    BContainer,
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    openMenu: function() {
      this.show = true
    },
    closeMenu: function() {
      this.show = false
    },
  },
}
</script>
