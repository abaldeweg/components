<template>
  <article>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text
    </p>
    <button @click="show = !show">Show Modal</button>
    <b-modal @close="show = !show" v-if="show">
      Text Text Text Text Text
    </b-modal>
  </article>
</template>

<script>
import BModal from '../components/BModal/BModal'

export default {
  name: 'b-modal-view',
  components: {
    BModal,
  },
  data() {
    return {
      show: true,
    }
  },
}
</script>
