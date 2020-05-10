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
        <b-dropdown>
          <template #selector>
            <b-icon-settings />
          </template>
          <b-dropdown-item>
            Edit 1
          </b-dropdown-item>
          <b-dropdown-item>
            Remove
          </b-dropdown-item>
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
            <b-icon-settings />
          </template>
          <b-dropdown-item>
            Edit 2
          </b-dropdown-item>
          <b-dropdown-item>
            Remove
          </b-dropdown-item>
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
import BListSeparator from '../components/BList/BListSeparator'
import BDropdownItem from '../components/BDropdown/BDropdownItem'
import BForm from '../components/BForm/BForm'
import BDropdown from '../components/BDropdown/BDropdown'
import BIconSettings from '../components/BIcon/BIconSettings'

export default {
  name: 'b-list-view',
  components: {
    BList,
    BListSeparator,
    BDropdownItem,
    BForm,
    BDropdown,
    BIconSettings,
  },
}
</script>
