<template>
  <section>
    <h1>baldeweg/components</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'global' }">
          Global
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'notification' }">Notification</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'notification-bar' }">
          NotificationBar
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'masthead' }">
          Masthead
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'divider' }">
          Divider
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'code' }">
          Code
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'index-view'
}
</script>
