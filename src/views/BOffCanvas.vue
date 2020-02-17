<template>
  <section class="container container_m">
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>

    <b-off-canvas>
      <div class="offcanvas_overlay toggleMenu"></div>
      <div class="offcanvas_container">
        <div class="offcanvas_header">
          <button class="btn btn_text toggleMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              class="icon"
            >
              <path
                d="M44.987 9.643l-15.35 15.349 15.35 15.35-4.685 4.684-15.349-15.35-15.35 15.35-4.629-4.63 15.35-15.349-15.35-15.35L9.66 5.014l15.35 15.35 15.348-15.35z"
              />
            </svg>
          </button>
        </div>
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
        <hr class="divider" />
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
      </div>
    </b-off-canvas>
  </section>
</template>

<script>
import BOffCanvas from '../components/BOffCanvas/BOffCanvas'

const toggle = document.querySelectorAll('.toggleMenu')
const canvas = document.querySelector('.offcanvas_container')
const canvasOverlay = document.querySelector('.offcanvas_overlay')

toggle.forEach(menu => {
  menu.addEventListener('click', event => {
    event.preventDefault()
    canvas.classList.toggle('isActive')
    canvasOverlay.classList.toggle('isActive')
  })
})

export default {
  name: 'b-off-canvas-view',
  components: {
    BOffCanvas
  }
}
</script>
