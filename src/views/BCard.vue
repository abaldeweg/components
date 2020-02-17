<template>
  <article>
    <b-card image="full">
      <template #image>
        <a href="/">
          <img v-holder="{ img: '1200x676' }" />
        </a>
      </template>
      <template #title>
        <router-link :to="{ name: 'index' }">Title</router-link>
      </template>
      <template #meta>
        <ul class="card_meta">
          <li class="card_meta_item">
            Meta
          </li>
          <li class="card_meta_item">
            <a href="/">20.06.2016 14:05</a>
          </li>
        </ul>
      </template>
      <template #content>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </template>
      <template #options>
        <ul class="card_options">
          <li class="card_option">
            <button class="card_option_btn">
              Edit
            </button>
          </li>
          <li class="card_option">
            <button class="card_option_btn">
              Remove
            </button>
          </li>
        </ul>
      </template>
    </b-card>

    <b-card image="wide">
      <template #image>
        <a href="/">
          <img v-holder="{ img: '990x557' }" />
        </a>
      </template>
      <template #title>
        <a href="/">Title</a>
      </template>
      <template #meta>
        <ul class="card_meta">
          <li class="card_meta_item">
            Meta
          </li>
          <li class="card_meta_item">
            <a href="/">20.06.2016 14:05</a>
          </li>
        </ul>
      </template>
      <template #content>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </template>
      <template #options>
        <ul class="card_options">
          <li class="card_option">
            <button class="card_option_btn">
              Edit
            </button>
          </li>
          <li class="card_option">
            <button class="card_option_btn">
              Remove
            </button>
          </li>
        </ul>
      </template>
    </b-card>

    <b-card image="square">
      <template #image>
        <a href="/">
          <img v-holder="{ img: '200x200' }" />
        </a>
      </template>
      <template #title>
        <a href="/">Title</a>
      </template>
      <template #meta>
        <ul class="card_meta">
          <li class="card_meta_item">
            Meta
          </li>
          <li class="card_meta_item">
            <a href="/">20.06.2016 14:05</a>
          </li>
        </ul>
      </template>
      <template #content>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </template>
      <template #options>
        <ul class="card_options">
          <li class="card_option">
            <button class="card_option_btn">
              Edit
            </button>
          </li>
          <li class="card_option">
            <button class="card_option_btn">
              Remove
            </button>
          </li>
        </ul>
      </template>
    </b-card>

    <b-card>
      <template #title>
        <a href="/">Title</a>
      </template>
      <template #meta>
        <ul class="card_meta">
          <li class="card_meta_item">
            Meta
          </li>
          <li class="card_meta_item">
            <a href="/">20.06.2016 14:05</a>
          </li>
        </ul>
      </template>
      <template #content>
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text text text text text text text
        text text text text text text text text
      </template>
      <template #options>
        <ul class="card_options">
          <li class="card_option">
            <button class="card_option_btn">
              Edit
            </button>
          </li>
          <li class="card_option">
            <button class="card_option_btn">
              Remove
            </button>
          </li>
        </ul>
      </template>
    </b-card>

    <b-card image="tiny">
      <template #image>
        <a href="/">
          <img v-holder="{ img: '25x25' }" />
        </a>
      </template>
      <template #options>
        <ul class="card_options">
          <li class="card_option">
            <button class="card_option_btn">
              Edit
            </button>
          </li>
          <li class="card_option">
            <button class="card_option_btn">
              Remove
            </button>
          </li>
        </ul>
      </template>
      <template #content>
        text text text text text text text text text text
      </template>
      <template #meta>
        Meta
      </template>
    </b-card>

    <b-card>
      <template #options>
        <ul class="card_options">
          <li class="card_option">
            <button class="card_option_btn">
              Edit
            </button>
          </li>
          <li class="card_option">
            <button class="card_option_btn">
              Remove
            </button>
          </li>
        </ul>
      </template>
      <template #content>
        text text text text text text text text text text
      </template>
    </b-card>
  </article>
</template>

<script>
import BCard from '../components/BCard/BCard'

export default {
  name: 'b-card-view',
  components: {
    BCard
  }
}
</script>
