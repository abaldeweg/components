<template>
  <article>
    <b-notification-bar>
      <b-notification type="neutral" title="Title" hidable>
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
import BNotificationBar from '../components/BNotificationBar/BNotificationBar'
import BNotification from '../components/BNotification/BNotification'

export default {
  name: 'b-notification-bar-view',
  components: {
    BNotificationBar,
    BNotification,
  },
}
</script>
