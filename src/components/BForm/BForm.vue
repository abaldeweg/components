<template>
  <form method="post" enctype="multipart/form-data" class="form">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'b-form'
}
</script>

<style scoped>
.form {
  box-sizing: border-box;
  width: 100%;
  margin: 10px 0;
}
.form_group {
  clear: both;
  margin-bottom: 20px;
  overflow: auto;
}
.form_group:last-child {
  margin-bottom: 0;
}
.form_buttons {
  text-align: right;
}
.form_item {
  clear: both;
  overflow: auto;
}
.form_input {
  border: 1px solid var(--color-neutral-04);
  background: var(--color-neutral-00);
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  margin: 0;
  font-size: 1em;
  color: var(--color-neutral-10);
}
.form_input:hover,
.form_input:focus {
  border: 1px solid var(--color-primary-10);
  outline: none;
}
fieldset {
  border: 0 hidden;
  padding: 0;
  margin: 0;
}
legend {
  padding: 0;
}
</style>
