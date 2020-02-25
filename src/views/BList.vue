<template>
  <article>
    <b-list>
      <template #image>
        <a href="/">
          <img v-holder="{ img: '50x50', auto: yes }" />
        </a>
      </template>
      <template #content>
        text text text text text text text text text text
      </template>
      <template #options>
        <button class="card_option">
          Edit
        </button>
        <button class="card_option">
          Remove
        </button>
      </template>
      <template #meta>
        Meta
      </template>
    </b-list>

    <b-list>
      <template #content>
        text text text text text text text text text text
      </template>
      <template #options>
        <button class="card_option">
          Edit
        </button>
        <button class="card_option">
          Remove
        </button>
      </template>
    </b-list>
  </article>
</template>

<script>
import BList from '../components/BList/BList'

export default {
  name: 'b-list-view',
  components: {
    BList
  }
}
</script>
