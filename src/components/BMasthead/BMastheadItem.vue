<template>
  <div class="masthead-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'masthead-item',
}
</script>

<style scoped>
.masthead-item {
  max-width: 150px;
}
.masthead-item:first-child {
  margin-left: 20px;
}
.masthead-item:last-child {
  margin-right: 20px;
}

@media all and (min-width: 600px) {
  .masthead-item {
    max-width: initial;
  }
}
</style>
