<template>
  <aside class="notification" :class="variations" v-if="show">
    <span class="notification_close" v-if="hidable" @click="close">
      <b-icon type="close" :size="20" />
    </span>
    <h2 class="notification_title" v-if="title">{{ title }}</h2>
    <p class="notification_entry">
      <slot />
      <b-button design="text" @click="undo()" v-if="undo">{{
        $t('undo')
      }}</b-button>
    </p>
  </aside>
</template>

<script>
import BIcon from '../BIcon/BIcon'
import BButton from '../BButton/BButton'
import validator from '../../services/validator'

export default {
  name: 'notification',
  props: {
    type: {
      default: 'neutral',
      required: true,
      validator: function(value) {
        return validator.choices(
          ['neutral', 'warning', 'error', 'success'],
          value
        )
      },
    },
    title: String,
    undo: {
      default: null,
    },
    hidable: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BIcon,
    BButton,
  },
  data() {
    return {
      show: true,
    }
  },
  computed: {
    variations: function() {
      return {
        notification_neutral: this.type === 'neutral',
        notification_warning: this.type === 'warning',
        notification_error: this.type === 'error',
        notification_success: this.type === 'success',
      }
    },
  },
  methods: {
    close: function() {
      this.show = false
    },
  },
}
</script>

<style scoped>
.notification {
  border-radius: 5px;
  background: var(--color-neutral-02);
  padding: 20px;
  margin: 20px 0;
  overflow: auto;
  color: var(--color-neutral-10);
  line-height: 1;
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
  border-left: 10px solid var(--color-neutral-10);
}
.notification_warning {
  border-left: 10px solid var(--color-accent-yellow-10);
}
.notification_error {
  border-left: 10px solid var(--color-accent-red-10);
}
.notification_success {
  border-left: 10px solid var(--color-accent-green-10);
}
</style>
