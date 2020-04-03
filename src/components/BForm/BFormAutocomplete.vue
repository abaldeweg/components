<template>
  <ul class="form-autocomplete" v-if="show">
    <li
      class="form-autocomplete_item"
      v-for="item in list"
      :key="item.id"
      @click="itemSelected(item)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'b-form-autocomplete',
  props: {
    query: String,
    data: Array,
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    list: function () {
      const query = this.query
      return this.data.filter(function (item) {
        return item.name.startsWith(query)
      })
    },
  },
  methods: {
    itemSelected: function (item) {
      this.$emit('item-selected', item)
      this.show = false
    },
  },
  watch: {
    query: function () {
      this.show = true
    },
  },
  mounted: function () {
    const _this = this
    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('form-autocomplete_item')) return
      _this.show = false
    })
  },
}
</script>

<style scoped>
.form-autocomplete {
  border: 1px solid var(--color-neutral-04);
  border-top: 0 hidden;
  list-style: none;
  padding: 0;
  margin: 0;
}
.form-autocomplete_item {
  cursor: pointer;
}
.form-autocomplete_item:hover {
  background: var(--color-neutral-04);
}
</style>
