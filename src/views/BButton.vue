<template>
  <article>
    <section class="container container_m">
      <h1>Primary</h1>
      <b-button type="primary">Button Primary</b-button>
      <b-button type="primary_danger">Button Danger</b-button>
      <br />
      <br />
      <b-button type="primary_wide">Button Wide</b-button>
    </section>

    <section class="container container_m">
      <h1>Outline</h1>
      <b-button type="outline">Button Outline</b-button>
      <b-button type="outline_danger">Button Danger</b-button>
      <br />
      <br />
      <b-button type="outline_wide">Button Wide</b-button>
    </section>

    <section class="container container_m">
      <h1>Text</h1>
      <b-button type="text">Button Text</b-button>
      <b-button type="text_danger">Button Danger</b-button>
    </section>
  </article>
</template>

<script>
import BButton from '../components/BButton/BButton'

export default {
  name: 'b-button-view',
  components: {
    BButton
  }
}
</script>
