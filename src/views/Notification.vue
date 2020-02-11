<template>
  <article>
    <notification type="neutral" title="Title" hidable>
      This is a notification.
    </notification>
    <notification type="caution" title="Title" hidable>
      This is a notification.
    </notification>
    <notification type="error" title="Title" hidable>
      This is a notification.
    </notification>
    <notification type="success" title="Title" hidable>
      This is a notification.
    </notification>
    <notification type="success" title="Title">
      This is a notification.
    </notification>
  </article>
</template>

<script>
import Notification from '../components/notification/notification'

export default {
  name: 'notification-view',
  components: {
    Notification
  }
}
</script>
