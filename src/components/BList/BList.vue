<template>
  <div class="list">
    <div class="list_image" v-if="$slots.image">
      <slot name="image" />
    </div>
    <div class="list_text">
      <h3 class="list_title">
        <slot name="title" />
      </h3>
      <div class="list_subtitle" v-if="$slots.meta">
        <slot name="meta" />
      </div>
    </div>
    <div class="list_options" v-if="$slots.options">
      <slot name="options" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-list',
}
</script>

<style scoped>
.list {
  display: flex;
  align-items: center;
  clear: both;
  border-bottom: 1px solid var(--color-neutral-04);
  padding-bottom: 10px;
  margin: 20px 0;
  overflow: auto;
}
.list_image {
  margin-right: 20px;
  opacity: 1;
  transition: opacity 0.2s;
  max-width: 50px;
}
.list_image:hover,
.list_image a:focus {
  opacity: 0.8;
}
.list_text {
  flex-grow: 1;
}
.list_text a,
.list_text a:hover {
  color: var(--color-neutral-10);
  text-decoration: none;
}
.list_title {
  font-size: 1.1em;
}
.list_title a {
  color: var(--color-neutral-10);
  text-decoration: none;
}
.list_title a:hover {
  color: var(--color-neutral-06);
  text-decoration: none;
}
.list_subtitle {
  color: var(--color-neutral-06);
}
.list_subtitle a {
  color: var(--color-neutral-06);
  text-decoration: none;
}
.list_subtitle a:hover {
  color: var(--color-neutral-06);
  text-decoration: underline;
}
.list_options {
  padding-left: 20px;
  cursor: pointer;
}
</style>
