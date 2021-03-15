<template>
  <article>
    <b-masthead>
      <b-masthead-item type="left">
        <span @click="menu">
          <b-icon type="menu" />
        </span>
      </b-masthead-item>

      <b-masthead-item type="center">
        <router-link :to="{ name: 'masthead' }">
          <img
            v-holder="{ img: '200x50', auto: 'yes', bg: '#ff0000' }"
            alt="baldeweg/components"
          />
        </router-link>
      </b-masthead-item>

      <b-masthead-item type="end">
        <span @click="profile">
          <b-icon type="profile" />
        </span>
      </b-masthead-item>
    </b-masthead>
  </article>
</template>

<script>
import BMasthead from '../components/BMasthead/BMasthead'
import BMastheadItem from '../components/BMasthead/BMastheadItem'
import BIcon from '../components/BIcon/BIcon'

export default {
  name: 'b-masthead-view',
  components: {
    BMasthead,
    BMastheadItem,
    BIcon,
  },
  methods: {
    menu: function() {
      console.log('toggle menu')
    },
    profile: function() {
      console.log('toggle profile')
    },
  },
}
</script>
