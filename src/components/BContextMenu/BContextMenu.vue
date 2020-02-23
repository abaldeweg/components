<template>
  <ul class="contextMenu">
    <slot />
  </ul>
</template>

<script>
window.addEventListener('click', () => {
  const menu = document.querySelector('.contextMenu')
  menu.style.display = 'none'
})

window.addEventListener('contextmenu', event => {
  const menu = document.querySelector('.contextMenu')
  event.preventDefault()
  menu.style.left = event.pageX + 'px'
  menu.style.top = event.pageY + 'px'
  menu.style.display = 'block'
})

export default {
  name: 'b-context-menu'
}
</script>

<style scoped>
.contextMenu {
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
</style>
