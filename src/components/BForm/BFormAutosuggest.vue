<template>
  <b-dropdown>
    <template #selector>
      <b-form-input v-model="item" />
    </template>
    <b-dropdown-item
      v-for="(item, key) in list"
      :key="key"
      :title="item"
      @click="select(item, key)"
    />
  </b-dropdown>
</template>

<script>
import BDropdown from '../BDropdown/BDropdown'
import BDropdownItem from '../BDropdown/BDropdownItem'
import BFormInput from '../BForm/BFormInput'

export default {
  name: 'b-form-autosuggest',
  props: {
    data: Object,
    value: Object,
  },
  components: {
    BDropdown,
    BDropdownItem,
    BFormInput,
  },
  data() {
    return {
      item: null,
    }
  },
  computed: {
    list: function () {
      let list = {}
      for (let key in this.data) {
        if (this.data[key].startsWith(this.item)) {
          list[key] = this.data[key]
        }
      }

      return list
    },
  },
  methods: {
    select: function (item, key) {
      this.item = item
      this.$emit('input', { id: key, item: item })
    },
  },
}
</script>
