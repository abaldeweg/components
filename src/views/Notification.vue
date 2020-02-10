<template>
  <section class="container container_m">
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <div class="notifications">
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
    </div>
  </section>
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
