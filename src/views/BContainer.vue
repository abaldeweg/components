<template>
  <article>
    <b-container size="l">
      <h2>Container Large</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </b-container>
    <b-container size="m">
      <h2>Container Medium</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </b-container>
    <b-container size="s">
      <h2>Container Small</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </b-container>

    <b-container size="l" align="right">
      <h2>Container Large</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </b-container>
    <b-container size="l" align="center">
      <h2>Container Large</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </b-container>

    <b-container size="l" highlight>
      <h2>Container Large</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </b-container>
    <b-container size="m" highlight>
      <h2>Container Medium</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </b-container>
    <b-container size="s" highlight>
      <h2>Container Small</h2>
      <p>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </p>
    </b-container>
  </article>
</template>

<script>
import BContainer from '../components/BContainer/BContainer'

export default {
  name: 'b-container-view',
  components: {
    BContainer,
  },
}
</script>
