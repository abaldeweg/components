<template>
  <textarea
    class="form-textarea"
    :value="value"
    @input="$emit('input', $event.target.value)"
    ref="textarea"
  ></textarea>
</template>

<script>
export default {
  name: 'b-form-textarea',
  props: {
    value: String,
  },
  mounted: function () {
    this.$refs.textarea.value = this.$slots.default[0].text
  },
}
</script>

<style scoped>
.form-textarea {
  border: 1px solid var(--color-neutral-04);
  background: var(--color-neutral-00);
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  margin: 0;
  font-size: 1em;
  color: var(--color-neutral-10);
}
.form-textarea:hover,
.form-textarea:focus {
  border: 1px solid var(--color-primary-10);
  outline: none;
}
</style>
