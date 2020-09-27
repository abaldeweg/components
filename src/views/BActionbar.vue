<template>
  <b-actionbar>
    <template #input>
      <b-search placeholder="Search" button="Find" icon filter />
    </template>

    <template #actions>
      <b-button design="outline">Action</b-button>
    </template>
  </b-actionbar>
</template>

<script>
import BActionbar from '../components/BActionbar/BActionbar'
import BSearch from '../components/BSearch/BSearch'
import BButton from '../components/BButton/BButton'

export default {
  name: 'b-actionbar-view',
  components: {
    BActionbar,
    BSearch,
    BButton,
  },
}
</script>
