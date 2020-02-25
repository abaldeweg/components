<template>
  <div class="list">
    <div class="list_image" v-if="$slots.image">
      <slot name="image" />
    </div>
    <h2 class="list_title">
      <slot name="title" />
    </h2>
    <p class="list_text">
      <slot name="content" />
    </p>
    <div class="list_card">
      <slot name="options" />
    </div>
    <div class="list_meta" v-if="$slots.meta">
      <slot name="meta" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-list'
}
</script>

<style scoped>
.list {
  clear: both;
  border-bottom: 1px solid var(--color-neutral-04);
  margin: 20px 0;
  overflow: auto;
}
.list_image {
  float: left;
  background: var(--color-neutral-02);
  line-height: 0;
  width: 50px;
  margin: 0 20px 20px 0;
  opacity: 1;
  transition: opacity 0.2s;
}
.list_image a {
  outline: 0;
}
.list_image:hover,
.list_image a:focus {
  opacity: 0.8;
}
.list_image_tiny {
  float: left;
  margin: 0 20px 20px 0;
}
.list_title {
  margin: 0;
}
.list_title a {
  color: var(--color-neutral-10);
  text-decoration: none;
}
.list_title a:hover {
  color: var(--color-neutral-06);
  text-decoration: none;
}
.list_meta {
  display: block;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  color: var(--color-neutral-06);
  list-style: none;
  overflow: auto;
}
.list_meta a {
  color: var(--color-neutral-06);
  text-decoration: none;
}
.list_meta a:hover {
  color: var(--color-neutral-06);
  text-decoration: underline;
}
.list_meta_item {
  display: inline-block;
  white-space: nowrap;
}
.list_meta_item::after {
  content: '\00a0\00a0';
}
.list_meta_item:last-child::after {
  content: '';
}
.list_text {
  position: relative;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.list_text a,
.list_text a:hover {
  color: var(--color-neutral-10);
  text-decoration: none;
}
.list_text_link {
  cursor: pointer;
}
.list_card {
  float: right;
  padding: 0;
  margin: 0;
}
.list_option {
  float: left;
  border: 0;
  background: transparent;
  padding: 0;
  margin-left: 10px;
  color: var(--color-neutral-10);
}
</style>
