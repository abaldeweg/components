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
          Edit 1
        </b-dropdown-item>
        <b-dropdown-item>
          Remove
        </b-dropdown-item>
      </template>
      <template #meta>Meta <b-list-seperator /> Meta</template>
    </b-list>

    <b-list>
      <template #title>
        <router-link :to="{ name: 'index' }">
          text text text text text text text text text text
        </router-link>
      </template>
      <template #options>
        <b-dropdown-item>
          Edit 2
        </b-dropdown-item>
        <b-dropdown-item>
          Remove
        </b-dropdown-item>
      </template>
    </b-list>

    <b-list>
      <template #title>
        <b-form class="form">
          <div class="form_group">
            <div class="form_item">
              <label for="title" class="form_label visuallyHidden">Title</label>
            </div>
            <div class="form_item">
              <input type="text" class="form_input" id="title" />
            </div>
          </div>
        </b-form>
      </template>
      <template #options>
        <b-dropdown-item>
          Edit 2
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
import BForm from '../components/BForm/BForm'

export default {
  name: 'b-list-view',
  components: {
    BList,
    BListSeperator,
    BDropdownItem,
    BForm
  }
}
</script>
