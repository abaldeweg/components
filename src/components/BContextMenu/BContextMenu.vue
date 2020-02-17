<template>
  <ul class="contextMenu">
    <slot />
  </ul>
</template>

<script>
const menu = document.querySelector('.contextMenu')

window.addEventListener('click', () => {
  menu.style.display = 'none'
})

window.addEventListener('contextmenu', event => {
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
.contextMenu_item {
  padding: 5px 20px;
  cursor: pointer;
}
.contextMenu_item:hover {
  background: var(--color-neutral-02);
}
.contextMenu a,
.contextMenu a:hover {
  display: block;
  width: 100%;
  color: var(--color-neutral-10);
}
.contextMenu_btn {
  border: 0;
  background: transparent;
  padding: 0;
  width: 100%;
  text-align: left;
  color: var(--color-neutral-10);
  font-family: var(--font-sans);
  font-size: 1em;
  cursor: pointer;
}
</style>
