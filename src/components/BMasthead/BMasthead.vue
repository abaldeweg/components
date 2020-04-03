<template>
  <header class="masthead">
    <nav class="masthead_nav" v-if="showMenu">
      <button class="masthead_btn" @click="$emit('toggle-menu')">
        <b-icon-menu />
      </button>
    </nav>
    <div class="masthead_logo">
      <slot />
    </div>
    <div class="masthead_settings" v-if="showSettings">
      <button class="masthead_btn" @click="$emit('toggle-settings')">
        <b-icon-plus />
      </button>
    </div>
  </header>
</template>

<script>
import BIconMenu from '../BIcon/BIconMenu'
import BIconPlus from '../BIcon/BIconPlus'

export default {
  name: 'masthead',
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
    showSettings: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BIconMenu,
    BIconPlus,
  },
}
</script>

<style scoped>
.masthead {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--color-neutral-00);
  width: 100%;
  height: var(--masthead-height);
  border-bottom: 1px solid var(--color-neutral-04);
  z-index: 3;
}
.masthead_nav {
  margin: 0 20px;
}
.masthead_logo {
  flex-grow: 2;
  text-align: center;
  margin: 0 20px;
}
.masthead_settings {
  margin: 0 20px;
}
.masthead_btn {
  border: 0;
  background: transparent;
  padding: 0;
}

@media print {
  .masthead_nav,
  .masthead_settings {
    display: none;
  }
}
</style>
