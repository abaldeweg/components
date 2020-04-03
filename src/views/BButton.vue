<template>
  <article>
    <h2>Primary</h2>
    <b-button type="primary">Button Primary</b-button>
    <b-button type="primary_danger">Button Danger</b-button>
    <b-button type="primary" disabled>Button Disabled</b-button>
    <br />
    <br />
    <b-button type="primary_wide">Button Wide</b-button>
    <br />
    <br />
    <b-button type="primary_wide" disabled>Button Disabled Wide</b-button>

    <h2>Outline</h2>
    <b-button type="outline">Button Outline</b-button>
    <b-button type="outline_danger">Button Danger</b-button>
    <b-button type="outline" disabled>Button Disabled</b-button>
    <br />
    <br />
    <b-button type="outline_wide">Button Wide</b-button>
    <br />
    <br />
    <b-button type="outline_wide" disabled>Button Disabled Wide</b-button>

    <h2>Text</h2>
    <b-button type="text">Button Text</b-button>
    <b-button type="text_danger">Button Danger</b-button>
    <b-button type="text" disabled>Button Disabled</b-button>
  </article>
</template>

<script>
import BButton from '../components/BButton/BButton'

export default {
  name: 'b-button-view',
  components: {
    BButton,
  },
}
</script>
