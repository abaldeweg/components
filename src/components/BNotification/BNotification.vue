<template>
  <aside class="notification" :class="variations" v-if="show">
    <span class="notification_close" v-if="hidable" @click="close">
      <b-icon-close />
    </span>
    <h2 class="notification_title" v-if="title">{{ title }}</h2>
    <p class="notification_entry"><slot /></p>
  </aside>
</template>

<script>
import BIconClose from '../BIcon/BIconClose'

export default {
  name: 'notification',
  props: {
    type: {
      default: 'neutral',
      required: true,
      validator: function (value) {
        return ['neutral', 'caution', 'error', 'success'].indexOf(value) !== -1
      },
    },
    title: String,
    hidable: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BIconClose,
  },
  data() {
    return {
      show: true,
    }
  },
  computed: {
    variations: function () {
      return {
        notification_neutral: this.type === 'neutral',
        notification_caution: this.type === 'caution',
        notification_error: this.type === 'error',
        notification_success: this.type === 'success',
      }
    },
  },
  methods: {
    close: function () {
      this.show = false
    },
  },
}
</script>

<style scoped>
.notification {
  border-radius: 5px;
  background: var(--color-neutral-00);
  padding: 20px;
  margin: 20px 0;
  overflow: auto;
  color: var(--color-neutral-10);
}
html[dark] .notification {
  color: var(--color-neutral-00);
}
.notification_close {
  float: right;
  cursor: pointer;
}
.notification_title {
  margin: 0;
}
.notification_entry {
  padding: 0;
}
.notification_neutral {
  border: 2px solid var(--color-neutral-08);
  background: var(--color-neutral-00);
}
html[dark] .notification_neutral {
  background: var(--color-neutral-02);
  color: var(--color-neutral-10);
}
.notification_caution {
  border: 2px solid var(--color-accent-yellow-10);
  background: var(--color-accent-yellow-00);
}
html[dark] .notification_caution {
  background: var(--color-accent-yellow-05);
}
.notification_error {
  border: 2px solid var(--color-accent-red-10);
  background: var(--color-accent-red-00);
}
html[dark] .notification_error {
  background: var(--color-accent-red-05);
}
.notification_success {
  border: 2px solid var(--color-accent-green-10);
  background: var(--color-accent-green-00);
}
html[dark] .notification_success {
  background: var(--color-accent-green-05);
}
</style>
