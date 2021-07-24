<template>
  <article>
    <b-toast :type="type" ref="toast">Toast</b-toast>

    <button @click="toast.show()">Show Toast</button>

    <button @click="type = 'error'">Error</button>
    <button @click="type = 'warning'">Warning</button>
    <button @click="type = 'success'">Success</button>
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
    const type = ref(null)

    return { toast, type }
  },
}
</script>
