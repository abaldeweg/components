<template>
  <b-flex>
    <b-flex-row>
      <b-flex-col>Column 1</b-flex-col>
      <b-flex-col>Column 2</b-flex-col>
    </b-flex-row>
  </b-flex>
</template>

<script>
import BFlex from '../components/BFlex/BFlex'
import BFlexRow from '../components/BFlex/BFlexRow'
import BFlexCol from '../components/BFlex/BFlexCol'

export default {
  name: 'b-flex-view',
  components: {
    BFlex,
    BFlexRow,
    BFlexCol,
  },
}
</script>
