<template>
  <section>
    <p>
      <b-badge content="1"><b-icon type="cart" /></b-badge>text text text
    </p>
    <p>
      <b-badge content="99"><b-icon type="cart" /></b-badge>text text text
    </p>
  </section>
</template>

<script>
import BBadge from '../components/BBadge/BBadge'
import BIcon from '../components/BIcon/BIcon'

export default {
  name: 'b-badge-view',
  components: {
    BBadge,
    BIcon,
  },
}
</script>
