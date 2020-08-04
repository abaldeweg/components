<template>
  <b-dropdown position="bottom">
    <template #selector>
      <b-form-input v-model="item" />
    </template>

    <div v-if="list !== []">
      <b-dropdown-item
        v-for="item in list"
        :key="item[identifierId]"
        :title="item[identifierName]"
        @click="select(item)"
      />
    </div>
  </b-dropdown>
</template>

<script>
import BDropdown from '../BDropdown/BDropdown'
import BDropdownItem from '../BDropdown/BDropdownItem'
import BFormInput from '../BForm/BFormInput'

export default {
  name: 'b-form-autosuggest',
  props: {
    source: Array,
    value: Number,
    identifierId: {
      type: String,
      default: 'id',
    },
    identifierName: {
      type: String,
      default: 'name',
    },
  },
  components: {
    BDropdown,
    BDropdownItem,
    BFormInput,
  },
  data() {
    return {
      item: null,
      list: this.source,
    }
  },
  methods: {
    parseValue: function () {
      const items = this.source.filter(
        (element) => element[this.identifierId] === this.value
      )
      this.item = items.length === 1 ? items[0].name : null
    },
    select: function (item) {
      this.item = item[this.identifierName]
      this.$emit('input', item[this.identifierId])
    },
  },
  watch: {
    value: 'parseValue',
    item: function () {
      this.list = this.source.filter(
        (element) =>
          element[this.identifierName].search(new RegExp(this.item, 'i')) !== -1
      )
    },
  },
  created: function () {
    this.parseValue()
  },
}
</script>
