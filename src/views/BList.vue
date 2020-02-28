<template>
  <article>
    <b-list>
      <template #image>
        <router-link :to="{ name: 'index' }">
          <img v-holder="{ img: '50x50', auto: 'yes' }" />
        </router-link>
      </template>
      <template #title>
        <router-link :to="{ name: 'index' }">
          text text text text text text text text text text
        </router-link>
      </template>
      <template #options>
        <b-dropdown-item>
          Edit1
        </b-dropdown-item>
        <b-dropdown-item>
          Remove
        </b-dropdown-item>
      </template>
      <template #meta> Meta <b-list-seperator /> Meta </template>
    </b-list>

    <b-list>
      <template #title>
        <router-link :to="{ name: 'index' }">
          text text text text text text text text text text
        </router-link>
      </template>
      <template #options>
        <b-dropdown-item>
          Edit2
        </b-dropdown-item>
        <b-dropdown-item>
          Remove
        </b-dropdown-item>
      </template>
    </b-list>
  </article>
</template>

<script>
import BList from '../components/BList/BList'
import BListSeperator from '../components/BList/BListSeperator'
import BDropdownItem from '../components/BDropdown/BDropdownItem'

export default {
  name: 'b-list-view',
  components: {
    BList,
    BListSeperator,
    BDropdownItem
  }
}
</script>
