<template>
  <div class="card">
    <div
      :class="{
        card_image: image !== null,
        card_image_full: image === 'full',
        card_image_wide: image === 'wide',
        card_image_square: image === 'square',
        card_image_tiny: image === 'tiny'
      }"
    >
      <slot name="image" />
    </div>
    <h2 class="card_title">
      <slot name="title" />
    </h2>
    <p class="card_text">
      <slot name="content" />
    </p>
    <slot name="options" />
    <div class="card_meta">
      <slot name="meta" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-card',
  props: {
    image: {
      default: null,
      validator: function(value) {
        return ['full', 'wide', 'square', 'tiny'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
.card {
  clear: both;
  border-bottom: 1px solid var(--color-neutral-04);
  margin: 20px 0;
  overflow: auto;
}
.card_image {
  background: var(--color-neutral-02);
  line-height: 0;
  margin-bottom: 10px;
  opacity: 1;
  transition: opacity 0.2s;
}
.card_image a {
  outline: 0;
}
.card_image:hover,
.card_image a:focus {
  opacity: 0.8;
}
.card_image_full {
  width: 100%;
}
.card_image_wide {
  width: 100%;
}
.card_image_square {
  float: left;
  width: 100px;
  margin: 0 20px 20px 0;
}
.card_image_tiny {
  float: left;
  margin: 0 20px 20px 0;
}
.card_title {
  margin: 0;
}
.card_title a {
  color: var(--color-neutral-10);
  text-decoration: none;
}
.card_title a:hover {
  color: var(--color-neutral-06);
  text-decoration: none;
}
.card_meta {
  display: block;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  color: var(--color-neutral-06);
  list-style: none;
  overflow: auto;
}
.card_meta a {
  color: var(--color-neutral-06);
  text-decoration: none;
}
.card_meta a:hover {
  color: var(--color-neutral-06);
  text-decoration: underline;
}
.card_meta_item {
  display: inline-block;
  white-space: nowrap;
}
.card_meta_item::after {
  content: '\00a0\00a0';
}
.card_meta_item:last-child::after {
  content: '';
}
.card_text {
  position: relative;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.card_text a,
.card_text a:hover {
  color: var(--color-neutral-10);
  text-decoration: none;
}
.card_text_link {
  cursor: pointer;
}
.card_options {
  float: right;
  list-style: none;
  padding: 0;
  margin: 0;
}
.card_option {
  float: left;
}
.card_option_btn {
  border: 0;
  background: transparent;
  padding: 0;
  margin-left: 10px;
  color: var(--color-neutral-10);
}

@media all and (min-width: 660px) {
  .card_image_wide {
    float: left;
    width: 400px;
    margin: 0 20px 20px 0;
  }
}

@media all and (min-width: 400px) {
  .card_image_square {
    width: 200px;
  }
}
</style>
