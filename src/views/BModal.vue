<template>
  <article>
    <section>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
      <p>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text
      </p>
    </section>

    <button @click="show = !show">Show Modal</button>
    <b-modal :width="600" @close="show = !show" v-if="show">
      <template #title>Modal</template>
      <template #footer>Footer</template>
      <b-container>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
        <p>
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text
        </p>
      </b-container>
    </b-modal>
  </article>
</template>

<script>
import BModal from '../components/BModal/BModal'
import BContainer from '../components/BContainer/BContainer'

export default {
  name: 'b-modal-view',
  components: {
    BModal,
    BContainer,
  },
  data() {
    return {
      show: true,
    }
  },
}
</script>
