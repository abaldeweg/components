<template>
  <article>
    <b-toast ref="toast">Toast</b-toast>

    <button @click="toast.show()">Show Toast</button>
  </article>
</template>

<script>
import { ref } from '@vue/composition-api'
import BToast from '../components/BToast/BToast'

export default {
  name: 'b-toast-view',
  components: {
    BToast,
  },
  setup() {
    const toast = ref(null)

    return { toast }
  },
}
</script>
