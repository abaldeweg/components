<template>
  <b-three-col>
    <template #nav>
      nav
    </template>
    <template #list>
      list
    </template>
    <template #content>
      content
    </template>
  </b-three-col>
</template>

<script>
import BThreeCol from '../components/BThreeCol/BThreeCol'

export default {
  name: 'b-three-col-view',
  components: {
    BThreeCol
  }
}
</script>

<style>
html {
  --masthead-height: 0;
}
</style>
