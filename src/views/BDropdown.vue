<template>
  <article>
    <b-dropdown>
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-item><a href="/">Item 1</a></b-dropdown-item>
      <b-dropdown-item><a href="/">Item 2</a></b-dropdown-item>
      <b-dropdown-item><a href="/">Item 3</a></b-dropdown-item>
      <b-dropdown-item>
        <button class="dropdown_btn">
          Item 4
        </button>
      </b-dropdown-item>
    </b-dropdown>

    <b-dropdown flex>
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-item><a href="/">Item 1</a></b-dropdown-item>
      <b-dropdown-item><a href="/">Item 2</a></b-dropdown-item>
      <b-dropdown-item><a href="/">Item 3</a></b-dropdown-item>
      <b-dropdown-item>
        <button class="dropdown_btn">
          Item 4
        </button>
      </b-dropdown-item>
    </b-dropdown>

    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
  </article>
</template>

<script>
import BDropdown from '../components/BDropdown/BDropdown'
import BDropdownItem from '../components/BDropdown/BDropdownItem'

export default {
  name: 'b-dropdown-view',
  components: {
    BDropdown,
    BDropdownItem,
  },
}
</script>
