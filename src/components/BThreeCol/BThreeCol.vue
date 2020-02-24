<template>
  <article class="threecol">
    <div class="threecol_nav">
      <slot name="nav" />
    </div>
    <div class="threecol_list">
      <slot name="list" />
    </div>
    <div class="threecol_content">
      <slot name="content" />
    </div>
  </article>
</template>

<script>
export default {
  name: 'three-col'
}
</script>

<style scoped>
.threecol_nav {
  background: var(--color-neutral-10);
  color: var(--color-neutral-00);
}
.threecol_list {
  background: var(--color-neutral-02);
}

@media all and (min-width: 600px) {
  .threecol {
    display: flex;
    height: 100vh;
  }
  .threecol_nav {
    width: 60px;
  }
  .threecol_list {
    width: 40%;
    max-width: 400px;
  }
  .threecol_content {
    flex-grow: 1;
  }
}
</style>
