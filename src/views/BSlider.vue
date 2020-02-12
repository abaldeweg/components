<template>
  <b-slider>
    <img v-holder="{ img: '200x200' }" v-for="item in 10" :key="item" />
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
