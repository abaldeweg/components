<template>
  <div class="list" :class="{ hasDivider: divider }">
    <div class="list_image" v-if="$slots.image">
      <router-link :to="route">
        <slot name="image" />
      </router-link>
    </div>

    <div class="list_body">
      <h3 class="list_title" :class="{ isBold: bold }">
        <router-link :to="route">
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
      type: Object,
      required: true,
    },
    bold: {
      type: Boolean,
      default: false,
    },
    divider: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.list {
  display: flex;
  align-items: center;
  clear: both;
}
.list.hasDivider {
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-neutral-02);
}
.list_image {
  margin-right: 20px;
  max-width: 50px;
  line-height: 0;
}
.list_body {
  flex-grow: 1;
}
.list_title {
  font-family: var(--font-sans);
  font-size: 1.2em;
  font-weight: normal;
  cursor: pointer;
}
.list_title.isBold {
  font-weight: bold;
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
