<template>
  <b-masthead>
    <b-masthead-item type="start">start</b-masthead-item>

    <b-masthead-item type="center">center</b-masthead-item>

    <b-masthead-item type="end">end</b-masthead-item>
  </b-masthead>
</template>

<script>
import BMasthead from '../components/BMasthead/BMasthead'
import BMastheadItem from '../components/BMasthead/BMastheadItem'

export default {
  name: 'b-masthead-view',
  components: {
    BMasthead,
    BMastheadItem,
  },
}
</script>
