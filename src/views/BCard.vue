<template>
  <article>
    <b-card title="Title" route="index">
      <template #image>
        <img v-holder="{ img: '600x338', auto: 'yes' }" />
      </template>
      <template #content>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </template>
    </b-card>

    <b-card title="Title" route="index">
      <template #content>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </template>
    </b-card>
  </article>
</template>

<script>
import BCard from '../components/BCard/BCard'

export default {
  name: 'b-card-view',
  components: {
    BCard,
  },
}
</script>
