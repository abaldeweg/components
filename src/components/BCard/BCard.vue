<template>
  <div class="card">
    <div class="card_image" v-if="$slots.image">
      <router-link :to="{ name: route }">
        <slot name="image" />
      </router-link>
    </div>
    <h2 class="card_title">
      <router-link :to="{ name: route }">
        {{ title }}
      </router-link>
    </h2>
    <p class="card_text">
      <router-link :to="{ name: route }">
        <slot name="content" />
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'b-card',
  props: {
    title: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
  },
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
  margin: 0 20px 0 0;
  opacity: 1;
  transition: opacity 0.2s;
}
.card_image:hover,
.card_image a:focus {
  opacity: 0.8;
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
.card_text {
  padding: 0;
  margin: 0;
}
.card_text a,
.card_text a:hover {
  color: var(--color-neutral-10);
  text-decoration: none;
}

@media all and (min-width: 600px) {
  .card_image {
    float: left;
    width: 400px;
    margin: 0 20px 20px 0;
  }
}
</style>
