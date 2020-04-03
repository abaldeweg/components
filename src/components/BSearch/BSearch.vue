<template>
  <form class="search" @submit.prevent>
    <input
      type="search"
      class="search_input"
      :placeholder="placeholder"
      :value="value"
      autofocus
      @input="$emit('input', $event.target.value)"
    />
    <button
      type="reset"
      class="search_btn search_btn_reset"
      @click="$emit('input', null)"
      v-if="value !== null"
    >
      <b-icon-close />
    </button>
    <button class="search_btn search_btn_primary">
      {{ button }}
    </button>
  </form>
</template>

<script>
import BIconClose from '../BIcon/BIconClose'

export default {
  name: 'b-search',
  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
    button: {
      type: String,
      default: 'Search',
    },
    value: String,
  },
  components: {
    BIconClose,
  },
}
</script>

<style scoped>
.search {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--color-primary-10);
  overflow: hidden;
}
.search_input {
  background: var(--color-neutral-00);
  flex-grow: 1;
  outline: 0;
  border: 0;
  width: 200px;
  padding-left: 10px;
  font-size: 1.3em;
}
.search_btn {
  border: 0;
  padding: 3px 10px;
  margin: 0;
  font-family: var(--font-sans);
  font-size: 1.3em;
  cursor: pointer;
  transition: background 0.2s;
}
.search_btn_primary {
  background: var(--color-primary-10);
  width: 100%;
  color: var(--color-neutral-00);
}
.search_btn_primary:hover,
.search_btn_primary:focus {
  outline: 0;
  background: var(--color-primary-05);
  color: var(--color-neutral-00);
}
.search_btn_reset {
  background: var(--color-neutral-00);
  color: var(--color-neutral-06Dark);
  line-height: 0;
}
.search_input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
input[type='search']::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}

@media all and (min-width: 500px) {
  .search_btn_primary {
    width: auto;
  }
}
</style>
