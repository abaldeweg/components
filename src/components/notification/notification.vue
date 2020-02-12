<template>
  <aside
    :class="{
      notification: true,
      notification_neutral: type === 'neutral',
      notification_caution: type === 'caution',
      notification_error: type === 'error',
      notification_success: type === 'success'
    }"
    v-if="show"
  >
    <span class="notification_close" v-if="hidable" @click="close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 50 50"
        class="icon"
      >
        <path
          d="M44.987 9.643l-15.35 15.349 15.35 15.35-4.685 4.684-15.349-15.35-15.35 15.35-4.629-4.63 15.35-15.349-15.35-15.35L9.66 5.014l15.35 15.35 15.348-15.35z"
        />
      </svg>
    </span>
    <h2 class="notification_title">{{ title }}</h2>
    <p class="notification_entry"><slot /></p>
  </aside>
</template>

<script>
export default {
  name: 'notification',
  props: {
    type: {
      default: 'neutral',
      required: true,
      validator: function(value) {
        return ['neutral', 'caution', 'error', 'success'].indexOf(value) !== -1
      }
    },
    title: String,
    hidable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    close: function() {
      this.show = false
    }
  }
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
  background: var(--color-neutral-10);
}
.notification_caution {
  border: 2px solid var(--color-accent-yellow-10);
  background: var(--color-accent-yellow-00);
}
.notification_error {
  border: 2px solid var(--color-accent-red-10);
  background: var(--color-accent-red-00);
}
.notification_success {
  border: 2px solid var(--color-accent-green-10);
  background: var(--color-accent-green-00);
}
</style>
