<template>
  <div class="list">
    <div class="list_image" v-if="$slots.image">
      <router-link :to="{ name: route }">
        <slot name="image" />
      </router-link>
    </div>

    <div class="list_body">
      <h3 class="list_title">
        <router-link :to="{ name: route }">
          <slot name="title" />
        </router-link>
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
  props: {
    route: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.list {
  display: flex;
  align-items: center;
  clear: both;
  border-bottom: 1px solid var(--color-neutral-02);
  padding-bottom: 10px;
  margin: 20px 0;
  overflow: auto;
}
.list_image {
  margin-right: 20px;
  max-width: 50px;
}
.list_body {
  flex-grow: 1;
}
.list_title {
  font-size: 1em;
  cursor: pointer;
}
.list_title,
.list_title a {
  color: var(--color-neutral-10);
}
.list_title:hover,
.list_title a:hover {
  color: var(--color-neutral-06);
}
.list_subtitle,
.list_subtitle a {
  color: var(--color-neutral-06);
}
.list_subtitle a:hover {
  text-decoration: underline;
}
.list_options {
  padding-left: 20px;
  cursor: pointer;
}
</style>
