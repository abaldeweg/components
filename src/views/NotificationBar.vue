<template>
  <article>
    <notification-bar>
      <notification type="neutral" title="Title" hidable>
        This is a notification.
      </notification>
    </notification-bar>
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
import NotificationBar from '../components/notification-bar/notification-bar'
import Notification from '../components/notification/notification'

export default {
  name: 'notification-bar-view',
  components: {
    NotificationBar,
    Notification
  }
}
</script>
