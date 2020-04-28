<template>
  <li class="dropdown-item">
    <div class="dropdown-item_icon" v-show="$slots.icon">
      <slot name="icon" />
    </div>
    <div class="dropdown-item_name" @click="$emit('click', $event)">
      <slot />
    </div>
  </li>
</template>

<script>
export default {
  name: 'b-dropdown-item',
}
</script>

<style scoped>
.dropdown-item {
  display: flex;
  align-items: center;
  padding: 5px 20px;
  cursor: pointer;
}
.dropdown-item:hover {
  background: var(--color-neutral-02);
}
.dropdown a,
.dropdown a:hover {
  display: block;
  width: 100%;
  color: var(--color-neutral-10);
}
.dropdown-item_name {
  width: 100%;
}
.dropdown_btn {
  border: 0;
  background: transparent;
  padding: 0;
  width: 100%;
  text-align: left;
  color: var(--color-neutral-10);
  font-family: var(--font-sans);
  font-size: 1em;
  cursor: pointer;
}
.dropdown-item_icon {
  display: flex;
  margin-right: 20px;
}
</style>
