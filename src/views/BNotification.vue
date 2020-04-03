<template>
  <article>
    <b-notification type="neutral" title="Title" hidable>
      This is a notification.
    </b-notification>
    <b-notification type="caution" title="Title" hidable>
      This is a notification.
    </b-notification>
    <b-notification type="error" title="Title" hidable>
      This is a notification.
    </b-notification>
    <b-notification type="success" title="Title" hidable>
      This is a notification.
    </b-notification>
    <b-notification type="success">
      This is a notification.
    </b-notification>
  </article>
</template>

<script>
import BNotification from '../components/BNotification/BNotification'

export default {
  name: 'b-notification-view',
  components: {
    BNotification,
  },
}
</script>
