<template>
  <div class="comment_item">
    <div class="comment_options">
      <slot name="options" />
    </div>
    <div class="comment_header">
      <slot name="header" />
    </div>
    <div class="comment_entry">
      <slot name="comment" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-comment'
}
</script>

<style scoped>
.comment_item {
  border-bottom: 1px solid var(--color-neutral-04);
  margin-bottom: 20px;
}
.comment_item:first-of-type {
  border-top: 1px solid var(--color-neutral-04);
  padding-top: 20px;
}
.comment_header {
  font-size: 0.9em;
}
.comment_author {
  font-weight: bold;
}
.comment_date {
  font-size: 0.8em;
  color: var(--color-neutral-06);
}
.comment_options {
  float: right;
}
.comment_btn {
  border: 0 hidden;
  background: transparent;
  color: var(--color-neutral-10);
}
</style>
