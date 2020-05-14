<template>
  <article>
    <b-list @click-title.prevent="log">
      <template #image>
        <router-link :to="{ name: 'index' }">
          <img v-holder="{ img: '50x50', auto: 'yes' }" />
        </router-link>
      </template>
      <template #title>
        text text text text text text text text text text
      </template>
      <template #options>
        <b-dropdown>
          <template #selector>
            <b-icon type="settings" />
          </template>
          <b-dropdown-item title="Edit 1" />
          <b-dropdown-item title="Remove" />
        </b-dropdown>
      </template>
      <template #meta>Meta <b-list-separator /> Meta</template>
    </b-list>

    <b-list>
      <template #title>
        <router-link :to="{ name: 'index' }">
          text text text text text text text text text text
        </router-link>
      </template>
      <template #options>
        <b-dropdown>
          <template #selector>
            <b-icon type="settings" />
          </template>
          <b-dropdown-item title="Edit 2" />
          <b-dropdown-item title="Remove" />
        </b-dropdown>
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
              <b-form-input type="text" id="title" />
            </div>
          </div>
        </b-form>
      </template>
    </b-list>
  </article>
</template>

<script>
import BList from '../components/BList/BList'
import BListSeparator from '../components/BList/BListSeparator'
import BDropdownItem from '../components/BDropdown/BDropdownItem'
import BForm from '../components/BForm/BForm'
import BFormInput from '../components/BForm/BFormInput'
import BDropdown from '../components/BDropdown/BDropdown'
import BIcon from '../components/BIcon/BIcon'

export default {
  name: 'b-list-view',
  components: {
    BList,
    BListSeparator,
    BDropdownItem,
    BForm,
    BFormInput,
    BDropdown,
    BIcon,
  },
  methods: {
    log: function () {
      console.log('title')
    },
  },
}
</script>
