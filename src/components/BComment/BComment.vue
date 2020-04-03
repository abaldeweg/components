<template>
  <div class="comment">
    <div class="comment_actions" v-if="$slots.actions">
      <slot name="actions" />
    </div>
    <div class="comment_header" v-if="author || date">
      <span class="comment_author" v-if="author">{{ author }}</span>
      <span class="comment_date" v-if="date">{{ date }}</span>
    </div>
    <div class="comment_entry">
      <p>
        <slot name="comment" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-comment',
  props: {
    author: String,
    date: String,
  },
}
</script>

<style scoped>
.comment {
  border-bottom: 1px solid var(--color-neutral-04);
  margin-bottom: 20px;
}
.comment:first-of-type {
  border-top: 1px solid var(--color-neutral-04);
  padding-top: 20px;
}
.comment_header {
  font-size: 0.9em;
}
.comment_author {
  font-weight: bold;
  margin-right: 10px;
}
.comment_date {
  font-size: 0.8em;
  color: var(--color-neutral-06);
}
.comment_actions {
  float: right;
}
.comment_action {
  border: 0 hidden;
  background: transparent;
  color: var(--color-neutral-10);
}
</style>
