<template>
  <article>
    <b-notification-bar>
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
    </b-notification-bar>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text
    </p>
  </article>
</template>

<script>
import BNotificationBar from '../components/BNotification/BNotificationBar'
import BNotification from '../components/BNotification/BNotification'

export default {
  name: 'b-notification-view',
  components: {
    BNotificationBar,
    BNotification,
  },
}
</script>
