<template>
  <b-slider>
    <img v-holder="{ img: '200x200' }" />
    <img v-holder="{ img: '200x200' }" />
    <img v-holder="{ img: '200x200' }" />
    <img v-holder="{ img: '200x200' }" />
    <img v-holder="{ img: '200x200' }" />
    <img v-holder="{ img: '200x200' }" />
    <img v-holder="{ img: '200x200' }" />
    <img v-holder="{ img: '200x200' }" />
    <img v-holder="{ img: '200x200' }" />
    <img v-holder="{ img: '200x200' }" />
  </b-slider>
</template>

<script>
import BSlider from '../components/BSlider/BSlider'

export default {
  name: 'b-slider-view',
  components: {
    BSlider
  }
}
</script>
