<template>
  <article>
    <b-list route="index">
      <template #image>
        <img v-holder="{ img: '50x50', auto: 'yes' }" alt="Icon" />
      </template>
      <template #title>
        text text text text text text text text text text
      </template>
      <template #options>
        <b-icon type="kebab" />
      </template>
      <template #meta>
        <router-link :to="{ name: 'index' }">Meta</router-link> &bull; Meta
      </template>
    </b-list>

    <b-list route="index">
      <template #title>
        text text text text text text text text text text
      </template>
      <template #options>
        <b-icon type="kebab" />
      </template>
    </b-list>

    <b-list route="index" bold>
      <template #title>
        text text text text text text text text text text
      </template>
      <template #options>
        <b-icon type="kebab" />
      </template>
    </b-list>

    <b-list route="index" divider>
      <template #image>
        <img v-holder="{ img: '50x50', auto: 'yes' }" alt="Icon" />
      </template>
      <template #title>
        text text text text text text text text text text
      </template>
      <template #options>
        <b-icon type="kebab" />
      </template>
      <template #meta>
        <router-link :to="{ name: 'index' }">Meta</router-link> &bull; Meta
      </template>
    </b-list>

    <b-list route="index" divider>
      <template #title>
        text text text text text text text text text text
      </template>
      <template #options>
        <b-icon type="kebab" />
      </template>
    </b-list>

    <b-list route="index" divider bold>
      <template #title>
        text text text text text text text text text text
      </template>
      <template #options>
        <b-icon type="kebab" />
      </template>
    </b-list>
  </article>
</template>

<script>
import BList from '../components/BList/BList'
import BIcon from '../components/BIcon/BIcon'

export default {
  name: 'b-list-view',
  components: {
    BList,
    BIcon,
  },
}
</script>
