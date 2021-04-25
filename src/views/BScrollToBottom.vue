<template>
  <b-scroll-to-bottom :width="0" :height="500">
    <ul>
      <li v-for="entry in list" :key="entry.id">
        {{ entry.name }}
      </li>
    </ul>
  </b-scroll-to-bottom>
</template>

<script>
import BScrollToBottom from '../components/BScrollToBottom/BScrollToBottom'

export default {
  name: 'scroll-to-bottom-view',
  components: {
    BScrollToBottom,
  },
  data() {
    return {
      list: [
        { id: 1, name: 'entry 1' },
        { id: 2, name: 'entry 2' },
        { id: 3, name: 'entry 3' },
        { id: 4, name: 'entry 4' },
        { id: 5, name: 'entry 5' },
        { id: 6, name: 'entry 6' },
        { id: 7, name: 'entry 7' },
        { id: 8, name: 'entry 8' },
        { id: 9, name: 'entry 9' },
        { id: 10, name: 'entry 10' },
      ],
    }
  },
  methods: {
    add() {
      let id = this.list.length + 1
      this.list.push({ id: id, name: 'entry ' + id })
    },
  },
  mounted() {
    let _this = this
    window.setInterval(() => {
      _this.add()
    }, 1000)
  },
}
</script>
