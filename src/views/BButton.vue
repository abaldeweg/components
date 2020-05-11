<template>
  <article>
    <h2>Primary</h2>
    <b-button design="primary" type="submit">Button Primary</b-button>
    <b-button design="primary_danger">Button Danger</b-button>
    <b-button design="primary" disabled>Button Disabled</b-button>
    <br />
    <br />
    <b-button design="primary_wide">Button Wide</b-button>
    <br />
    <br />
    <b-button design="primary_wide" disabled>Button Disabled Wide</b-button>

    <h2>Outline</h2>
    <b-button design="outline">Button Outline</b-button>
    <b-button design="outline_danger">Button Danger</b-button>
    <b-button design="outline" disabled>Button Disabled</b-button>
    <br />
    <br />
    <b-button design="outline_wide">Button Wide</b-button>
    <br />
    <br />
    <b-button design="outline_wide" disabled>Button Disabled Wide</b-button>

    <h2>Text</h2>
    <b-button design="text">Button Text</b-button>
    <b-button design="text_danger">Button Danger</b-button>
    <b-button design="text" disabled>Button Disabled</b-button>
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
