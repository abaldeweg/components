<template>
  <b-form-group>
    <b-form-item>
      <b-form-label for="item" hidden>{{ label }}</b-form-label>
      <div class="form-compact">
        <div class="form-compact_input">
          <input
            class="form-input"
            :placeholder="label"
            :value="value"
            @input="$emit('input', event ? $event : $event.target.value)"
            @change="$emit('change', event ? $event : $event.target.value)"
          />
        </div>
        <div class="form-compact_btn">
          <b-button design="primary">{{ button }}</b-button>
        </div>
      </div>
    </b-form-item>
  </b-form-group>
</template>

<script>
import BFormGroup from './BFormGroup'
import BFormItem from './BFormItem'
import BFormLabel from './BFormLabel'
import BButton from './../BButton/BButton'

export default {
  name: 'b-form-input',
  props: {
    value: null,
    event: {
      type: Boolean,
      default() {
        return false
      },
    },
    label: String,
    button: {
      type: String,
      default() {
        return 'OK'
      },
    },
  },
  components: {
    BFormGroup,
    BFormItem,
    BFormLabel,
    BButton,
  },
}
</script>

<style scoped>
.form-input {
  border: 1px solid var(--color-neutral-04);
  background: var(--color-neutral-00);
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  padding: 3px;
  margin: 0;
  font-size: 1em;
  color: var(--color-neutral-10);
}
.form-input:hover,
.form-input:focus {
  border: 1px solid var(--color-primary-10);
  outline: none;
}
.form-compact {
  display: flex;
  width: 100%;
  align-items: center;
}
.form-compact_input {
  flex-grow: 1;
}
.form-compact_btn {
  margin-left: 20px;
}
</style>
