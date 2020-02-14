<template>
  <button
    :class="{
      btn: true,
      btn_primary:
        type === 'primary' ||
        type === 'primary_danger' ||
        type === 'primary_wide',
      btn_primary_danger: type === 'primary_danger',
      btn_primary_wide: type === 'primary_wide',
      btn_outline:
        type === 'outline' ||
        type === 'outline_danger' ||
        type === 'outline_wide',
      btn_outline_danger: type === 'outline_danger',
      btn_outline_wide: type === 'outline_wide',
      btn_text: type === 'text' || type === 'text_danger',
      btn_text_danger: type === 'text_danger'
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'b-button',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
.btn {
  display: inline-block;
  border-radius: 3px;
  font-family: var(--font-sans);
  font-size: 1em;
  margin: 0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
/* Primary */
.btn_primary {
  outline: 0;
  border: 0;
  background: var(--color-primary-10);
  padding: 6px 11px;
  color: var(--color-neutral-00);
  opacity: 1;
  transition: background 0.2s;
}
html[dark] .btn_primary {
  color: var(--color-neutral-10);
}
.btn_primary:hover,
.btn_primary:focus {
  color: var(--color-neutral-00);
  background: var(--color-primary-05);
}
.btn_primary_danger {
  background: var(--color-accent-red-10);
}
.btn_primary_danger:hover,
.btn_primary_danger:focus {
  background: var(--color-accent-red-05);
}
.btn_primary_wide {
  width: 100%;
}
/* Outline */
.btn_outline {
  outline: 0;
  border: 1px solid var(--color-primary-10);
  background: var(--color-neutral-00);
  padding: 5px 10px;
  color: var(--color-primary-10);
  transition: background 0.2s;
}
.btn_outline:hover,
.btn_outline:focus {
  background: var(--color-primary-00);
  color: var(--color-primary-10);
}
.btn_outline_danger {
  border-color: var(--color-accent-red-10);
  color: var(--color-accent-red-10);
}
.btn_outline_danger:hover,
.btn_outline_danger:focus {
  color: var(--color-accent-red-10);
  background: var(--color-accent-red-00);
}
.btn_outline_wide {
  width: 100%;
}
/* Text */
.btn_text {
  border: 0;
  background: transparent;
  color: var(--color-primary-10);
  padding: 5px 10px;
}
.btn_text_danger,
.btn_text_danger:hover {
  color: var(--color-accent-red-10);
}
</style>
