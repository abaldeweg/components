<template>
  <article>
    <b-masthead>
      <b-masthead-item>
        <b-button design="text" @click="menu">
          <b-icon type="menu" />
        </b-button>
      </b-masthead-item>

      <b-masthead-item>
        <router-link :to="{ name: 'masthead' }">
          <img
            v-holder="{ img: '200x50', auto: 'yes', bg: '#ff0000' }"
            alt="baldeweg/components"
          />
        </router-link>
      </b-masthead-item>

      <b-masthead-item>
        <b-button design="text" @click="profile">
          <b-icon type="profile" />
        </b-button>
      </b-masthead-item>
    </b-masthead>
  </article>
</template>

<script>
import BMasthead from '../components/BMasthead/BMasthead'
import BMastheadItem from '../components/BMasthead/BMastheadItem'
import BIcon from '../components/BIcon/BIcon'
import BButton from '../components/BButton/BButton'

export default {
  name: 'b-masthead-view',
  components: {
    BMasthead,
    BMastheadItem,
    BIcon,
    BButton,
  },
  methods: {
    menu: function () {
      console.log('toggle menu')
    },
    profile: function () {
      console.log('toggle profile')
    },
  },
}
</script>
