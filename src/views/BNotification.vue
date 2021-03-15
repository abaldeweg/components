<template>
  <article>
    <b-notification-bar :position="position">
      <b-notification type="neutral" title="Title" hidable>
        This is a notification.
      </b-notification>
      <b-notification type="warning" title="Title" hidable>
        This is a notification.
      </b-notification>
      <b-notification type="error" title="Title" hidable>
        This is a notification.
      </b-notification>
      <b-notification type="success" title="Title" hidable>
        This is a notification.
      </b-notification>
      <b-notification type="success"> This is a notification. </b-notification>
      <b-notification
        v-for="notification in notifications"
        :key="notification.id"
        :type="notification.state"
        :undo="notification.undo"
        hidable
      >
        {{ notification.msg }}
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
    <button @click="position = 'top'">NotificationBar Top</button>
    <button @click="position = 'bottom'">NotificationBar Bottom</button>
  </article>
</template>

<script>
import BNotificationBar from '../components/BNotification/BNotificationBar'
import BNotification from '../components/BNotification/BNotification'
import notify from '../services/notification'

export default {
  name: 'b-notification-view',
  components: {
    BNotificationBar,
    BNotification,
  },
  data() {
    return {
      notifications: notify.list(),
      position: 'top',
    }
  },
  mounted: function() {
    setInterval(function() {
      notify.create(
        'test ' + new Date().getTime(),
        'neutral',
        5000,
        function() {
          alert('undo')
        }
      )
    }, 2000)
  },
}
</script>
