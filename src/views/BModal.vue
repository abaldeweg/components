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
    <b-modal :width="900" @close="show = !show" v-if="show">
      <button @click="show = false">Cancel</button>
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
