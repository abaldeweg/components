<template>
  <header class="masthead">
    <slot />
  </header>
</template>

<script>
export default {
  name: 'masthead',
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
  box-sizing: border-box;
  width: 100%;
  height: var(--masthead-height);
  border-bottom: 1px solid var(--color-neutral-02);
  line-height: 0;
  z-index: 3;
}

@media print {
  .masthead {
    display: none;
  }
}
</style>
