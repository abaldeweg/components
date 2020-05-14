<template>
  <form
    method="post"
    enctype="multipart/form-data"
    class="form"
    @submit="$emit('submit', $event)"
  >
    <slot />
  </form>
</template>

<script>
export default {
  name: 'b-form',
}
</script>

<style scoped>
.form {
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0;
}
</style>
