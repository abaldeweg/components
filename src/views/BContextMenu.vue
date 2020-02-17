<template>
  <article>
    <b-context-menu>
      <li class="contextMenu_item"><a href="/">Item 1</a></li>
      <li class="contextMenu_item"><a href="/">Item 2</a></li>
      <li class="contextMenu_item"><a href="/">Item 3</a></li>
      <li class="contextMenu_item">
        <button class="contextMenu_btn">
          Item 4
        </button>
      </li>
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

export default {
  name: 'b-context-menu-view',
  components: {
    BContextMenu
  }
}
</script>
