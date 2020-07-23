<template>
  <button class="btn" :class="variations" @click="click($event)">
    <span class="ripple" v-show="hasRipple" ref="ripple" />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'b-button',
  props: {
    design: {
      type: String,
      default: 'primary',
    },
    ripple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hasRipple: false,
    }
  },
  computed: {
    variations: function () {
      return {
        btn_primary:
          this.design === 'primary' ||
          this.design === 'primary_danger' ||
          this.design === 'primary_wide',
        btn_primary_danger: this.design === 'primary_danger',
        btn_primary_wide: this.design === 'primary_wide',
        btn_outline:
          this.design === 'outline' ||
          this.design === 'outline_danger' ||
          this.design === 'outline_wide',
        btn_outline_danger: this.design === 'outline_danger',
        btn_outline_wide: this.design === 'outline_wide',
        btn_text: this.design === 'text' || this.design === 'text_danger',
        btn_text_danger: this.design === 'text_danger',
      }
    },
  },
  methods: {
    click: function (event) {
      this.$emit('click', event)
      if (this.ripple) {
        this.startRipple()
      }
    },
    startRipple: function () {
      this.hasRipple = true
      let el = this.$refs.ripple
      const width = this.$el.offsetWidth
      const height = this.$el.offsetHeight
      const top = height / 2 - width / 2
      const left = width / 2 - width / 2
      el.style.top = top + 'px'
      el.style.left = left + 'px'
      el.style.width = width + 'px'
      el.style.height = width + 'px'
      const _this = this
      setTimeout(function () {
        _this.hasRipple = false
      }, 500)
    },
  },
}
</script>

<style scoped>
.btn {
  display: inline-block;
  position: relative;
  border-radius: 3px;
  font-family: var(--font-sans);
  font-size: 1em;
  margin: 0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
}
.ripple {
  position: absolute;
  border-radius: 100%;
  animation: ripple 0.5s;
  opacity: 0;
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
html[data-theme='dark'] .btn_primary {
  color: var(--color-neutral-10);
}
.btn_primary .ripple {
  background-color: var(--color-primary-05);
}
.btn_primary:hover,
.btn_primary:focus {
  color: var(--color-neutral-00);
  background: var(--color-primary-05);
}
.btn_primary_danger {
  background: var(--color-accent-red-10);
}
.btn_primary_danger .ripple {
  background-color: var(--color-accent-red-05);
}
.btn_primary_danger:hover,
.btn_primary_danger:focus {
  background: var(--color-accent-red-05);
}
.btn_primary[disabled],
.btn_primary[disabled]:hover {
  background: var(--color-neutral-06);
  cursor: default;
}
html[data-theme='dark'] .btn_primary[disabled],
html[data-theme='dark'] .btn_primary[disabled]:hover {
  color: var(--color-neutral-00);
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
.btn_outline .ripple {
  background-color: var(--color-primary-05);
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
.btn_outline_danger .ripple {
  background-color: var(--color-accent-red-05);
}
.btn_outline_danger:hover,
.btn_outline_danger:focus {
  color: var(--color-accent-red-10);
  background: var(--color-accent-red-00);
}
.btn_outline[disabled],
.btn_outline[disabled]:hover {
  background: transparent;
  border: 1px solid var(--color-neutral-06);
  color: var(--color-neutral-06);
  cursor: default;
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
.btn_text .ripple {
  background-color: var(--color-primary-05);
}
.btn_text_danger,
.btn_text_danger:hover {
  color: var(--color-accent-red-10);
}
.btn_text_danger .ripple {
  background-color: var(--color-accent-red-05);
}
.btn_text[disabled],
.btn_text[disabled]:hover {
  color: var(--color-neutral-06);
  cursor: default;
}

@keyframes ripple {
  0% {
    opacity: 1;
    transform: scale(0);
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
