<template>
  <button class="btn" :class="variations" @click="$emit('click')">
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
  },
  computed: {
    variations: function() {
      return {
        btn_primary:
          this.type === 'primary' ||
          this.type === 'primary_danger' ||
          this.type === 'primary_wide',
        btn_primary_danger: this.type === 'primary_danger',
        btn_primary_wide: this.type === 'primary_wide',
        btn_outline:
          this.type === 'outline' ||
          this.type === 'outline_danger' ||
          this.type === 'outline_wide',
        btn_outline_danger: this.type === 'outline_danger',
        btn_outline_wide: this.type === 'outline_wide',
        btn_text: this.type === 'text' || this.type === 'text_danger',
        btn_text_danger: this.type === 'text_danger'
      }
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
