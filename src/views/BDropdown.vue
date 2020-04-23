<template>
  <article>
    <b-dropdown>
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-item
        ><a href="/"
          >Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1
          Item 1 Item 1 Item 1 Item 1 Item 1</a
        ></b-dropdown-item
      >
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
      <b-dropdown-item>
        <template #icon>
          <b-icon-bin size="20" noHover />
        </template>
        <a href="/">Item 1</a>
      </b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item>
        <template #icon>
          <b-icon-plus size="20" noHover />
        </template>
        <a href="/">Item 2</a>
      </b-dropdown-item>
      <b-dropdown-item>
        <template #icon>
          <b-icon-plus size="20" noHover />
        </template>
        <a href="/">Item 3</a>
      </b-dropdown-item>
      <b-dropdown-item>
        <template #icon>
          <b-icon-plus size="20" noHover />
        </template>
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
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
    <p>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
      text text text text text
    </p>
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
import BIconPlus from '../components/BIcon/BIconPlus'
import BIconBin from '../components/BIcon/BIconBin'
import BDropdownDivider from '../components/BDropdown/BDropdownDivider'

export default {
  name: 'b-dropdown-view',
  components: {
    BDropdown,
    BDropdownItem,
    BIconPlus,
    BIconBin,
    BDropdownDivider,
  },
}
</script>
