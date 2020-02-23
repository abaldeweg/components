<template>
  <article>
    <b-context-menu>
      <b-context-menu-item><a href="/">Item 1</a></b-context-menu-item>
      <b-context-menu-item><a href="/">Item 2</a></b-context-menu-item>
      <b-context-menu-item><a href="/">Item 3</a></b-context-menu-item>
      <b-context-menu-item>
        <button class="contextMenu_btn">
          Item 4
        </button>
      </b-context-menu-item>
    </b-context-menu>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
  </article>
</template>

<script>
import BContextMenu from '../components/BContextMenu/BContextMenu'
import BContextMenuItem from '../components/BContextMenuItem/BContextMenuItem'

export default {
  name: 'b-context-menu-view',
  components: {
    BContextMenu,
    BContextMenuItem
  }
}
</script>
