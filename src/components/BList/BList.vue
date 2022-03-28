<template>
  <div
    class="list"
    :class="{ hasDivider: divider, isReverse: reverse, isDisabled: disabled }"
  >
    <div
      class="list_image"
      :class="{
        list_image_xs: imageSize === 'xs',
        list_image_s: imageSize === 's',
        list_image_m: imageSize === 'm',
        list_image_l: imageSize === 'l',
        list_image_xl: imageSize === 'xl',
      }"
      v-if="$slots.image"
    >
      <router-link :to="route" v-if="route">
        <slot name="image" />
      </router-link>
      <slot name="image" v-else />
    </div>

    <div class="list_body">
      <h3 class="list_title" :class="{ isBold: bold }">
        <router-link :to="route" v-if="route">
          <slot name="title" />
        </router-link>
        <slot name="title" v-else />
      </h3>

      <div class="list_subtitle" v-if="$slots.meta">
        <slot name="meta" />
      </div>

      <div class="list_subtitle" v-if="$slots.subtitle">
        <slot name="subtitle" />
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
    },
    bold: {
      type: Boolean,
      default: false,
    },
    divider: {
      type: Boolean,
      default: false,
    },
    imageSize: {
      type: String,
      validator(value) {
        return ['xs', 's', 'm', 'l', 'xl'].indexOf(value) !== -1
      },
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    disabled: {
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
  flex-direction: row;
}
.list.isReverse {
  flex-direction: row-reverse;
}
.list.hasDivider {
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-neutral-02);
}
.list_image {
  margin-right: 20px;
  margin-left: 0;
  line-height: 0;
  flex-shrink: 0;
}
.isReverse .list_image {
  margin-right: 0;
  margin-left: 20px;
}
.list_image_xs {
  width: 25px;
}
.list_image_s {
  width: 50px;
}
.list_image_m {
  width: 100px;
}
.list_image_l {
  width: 150px;
}
.list_image_xl {
  width: 200px;
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
.isDisabled .list_title:hover,
.isDisabled .list_title a:hover {
  color: var(--color-neutral-10);
}
.list_subtitle,
.list_subtitle a {
  color: var(--color-neutral-06);
}
.list_subtitle a:hover {
  text-decoration: underline;
}
.list_options {
  padding-right: 0;
  padding-left: 20px;
  cursor: pointer;
}
.isReverse .list_options {
  padding-right: 20px;
  padding-left: 0;
}
</style>
