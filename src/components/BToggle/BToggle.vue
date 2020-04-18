<template>
  <div class="toggle">
    <label class="toggle_label" @click="toggle">
      {{ label }}
    </label>
    <button
      class="toggle_indicator"
      :class="{ isActive: active }"
      @click="toggle"
    />
  </div>
</template>

<script>
export default {
  name: 'b-toggle',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: this.value,
    }
  },
  methods: {
    toggle: function () {
      this.active = !this.active
      this.$emit('input', this.active)
    },
  },
}
</script>

<style scoped>
.toggle {
  display: flex;
  justify-items: center;
}
.toggle_label {
  display: block;
  margin-right: 10px;
  cursor: pointer;
}
.toggle_indicator {
  position: relative;
  border: 0 hidden;
  border-radius: 50px;
  background: var(--color-neutral-08);
  height: 30px;
  width: 50px;
  padding: 0;
  cursor: pointer;
}
.toggle_indicator::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  border-radius: 90px;
  background: var(--color-neutral-00);
  width: 20px;
  height: 20px;
  transition: 0.2s;
}
.toggle_indicator.isActive {
  background: var(--color-primary-10);
}
.toggle_indicator.isActive::after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}
</style>
