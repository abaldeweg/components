<template>
  <article>
    <b-dropdown>
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-title>Title</b-dropdown-title>
      <b-dropdown-item title="Item 1" @click.prevent="log(1)" />
      <b-dropdown-item title="Item 2" @click.prevent="log(2)" />
      <b-dropdown-item title="Item 3" @click.prevent="log(3)" />
      <b-dropdown-item title="Item 4" @click.prevent="log(4)" />
    </b-dropdown>

    <div style="float: right;">
      <b-dropdown>
        <template #selector>
          <button>Dropdown</button>
        </template>
        <b-dropdown-title>Title</b-dropdown-title>
        <b-dropdown-item title="Item 1" @click.prevent="log(1)" />
        <b-dropdown-item title="Item 2" @click.prevent="log(2)" />
        <b-dropdown-item title="Item 3" @click.prevent="log(3)" />
        <b-dropdown-item title="Item 4" @click.prevent="log(4)" />
      </b-dropdown>
    </div>

    <b-dropdown position="mouse">
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-title>Title</b-dropdown-title>
      <b-dropdown-divider />
      <b-dropdown-item title="Item 1" icon="bin" @click.prevent="log(1)" />
      <b-dropdown-divider />
      <b-dropdown-item title="Item 2" icon="plus" @click.prevent="log(2)" />
      <b-dropdown-item title="Item 3" icon="plus" @click.prevent="log(3)" />
      <b-dropdown-item title="Item 4" icon="plus" @click.prevent="log(4)" />
    </b-dropdown>

    <div style="float: right;">
      <b-dropdown position="mouse">
        <template #selector>
          <button>Dropdown</button>
        </template>
        <b-dropdown-title>Title</b-dropdown-title>
        <b-dropdown-divider />
        <b-dropdown-item title="Item 1" icon="bin" @click.prevent="log(1)" />
        <b-dropdown-divider />
        <b-dropdown-item title="Item 2" icon="plus" @click.prevent="log(2)" />
        <b-dropdown-item title="Item 3" icon="plus" @click.prevent="log(3)" />
        <b-dropdown-item title="Item 4" icon="plus" @click.prevent="log(4)" />
      </b-dropdown>
    </div>

    <b-dropdown position="bottom">
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-title>Title</b-dropdown-title>
      <b-dropdown-divider />
      <b-dropdown-item title="Item 1" icon="bin" @click.prevent="log(1)" />
      <b-dropdown-divider />
      <b-dropdown-item title="Item 2" icon="plus" @click.prevent="log(2)" />
      <b-dropdown-item title="Item 3" icon="plus" @click.prevent="log(3)" />
      <b-dropdown-item title="Item 4" icon="plus" @click.prevent="log(4)" />
    </b-dropdown>

    <div style="float: right;">
      <b-dropdown position="bottom">
        <template #selector>
          <button>Dropdown</button>
        </template>
        <b-dropdown-title>Title</b-dropdown-title>
        <b-dropdown-divider />
        <b-dropdown-item title="Item 1" icon="bin" @click.prevent="log(1)" />
        <b-dropdown-divider />
        <b-dropdown-item title="Item 2" icon="plus" @click.prevent="log(2)" />
        <b-dropdown-item title="Item 3" icon="plus" @click.prevent="log(3)" />
        <b-dropdown-item title="Item 4" icon="plus" @click.prevent="log(4)" />
      </b-dropdown>
    </div>

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

    <b-dropdown>
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-title>Title</b-dropdown-title>
      <b-dropdown-item title="Item 1" @click.prevent="log(1)" />
      <b-dropdown-item title="Item 2" @click.prevent="log(2)" />
      <b-dropdown-item title="Item 3" @click.prevent="log(3)" />
      <b-dropdown-item title="Item 4" @click.prevent="log(4)" />
    </b-dropdown>

    <div style="float: right;">
      <b-dropdown>
        <template #selector>
          <button>Dropdown</button>
        </template>
        <b-dropdown-title>Title</b-dropdown-title>
        <b-dropdown-item title="Item 1" @click.prevent="log(1)" />
        <b-dropdown-item title="Item 2" @click.prevent="log(2)" />
        <b-dropdown-item title="Item 3" @click.prevent="log(3)" />
        <b-dropdown-item title="Item 4" @click.prevent="log(4)" />
      </b-dropdown>
    </div>

    <b-dropdown position="mouse">
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-title>Title</b-dropdown-title>
      <b-dropdown-divider />
      <b-dropdown-item title="Item 1" icon="bin" @click.prevent="log(1)" />
      <b-dropdown-divider />
      <b-dropdown-item title="Item 2" icon="plus" @click.prevent="log(2)" />
      <b-dropdown-item title="Item 3" icon="plus" @click.prevent="log(3)" />
      <b-dropdown-item title="Item 4" icon="plus" @click.prevent="log(4)" />
    </b-dropdown>

    <div style="float: right;">
      <b-dropdown position="mouse">
        <template #selector>
          <button>Dropdown</button>
        </template>
        <b-dropdown-title>Title</b-dropdown-title>
        <b-dropdown-divider />
        <b-dropdown-item title="Item 1" icon="bin" @click.prevent="log(1)" />
        <b-dropdown-divider />
        <b-dropdown-item title="Item 2" icon="plus" @click.prevent="log(2)" />
        <b-dropdown-item title="Item 3" icon="plus" @click.prevent="log(3)" />
        <b-dropdown-item title="Item 4" icon="plus" @click.prevent="log(4)" />
      </b-dropdown>
    </div>

    <b-dropdown position="bottom">
      <template #selector>
        <button>Dropdown</button>
      </template>
      <b-dropdown-title>Title</b-dropdown-title>
      <b-dropdown-divider />
      <b-dropdown-item title="Item 1" icon="bin" @click.prevent="log(1)" />
      <b-dropdown-divider />
      <b-dropdown-item title="Item 2" icon="plus" @click.prevent="log(2)" />
      <b-dropdown-item title="Item 3" icon="plus" @click.prevent="log(3)" />
      <b-dropdown-item title="Item 4" icon="plus" @click.prevent="log(4)" />
    </b-dropdown>

    <div style="float: right;">
      <b-dropdown position="bottom">
        <template #selector>
          <button>Dropdown</button>
        </template>
        <b-dropdown-title>Title</b-dropdown-title>
        <b-dropdown-divider />
        <b-dropdown-item title="Item 1" icon="bin" @click.prevent="log(1)" />
        <b-dropdown-divider />
        <b-dropdown-item title="Item 2" icon="plus" @click.prevent="log(2)" />
        <b-dropdown-item title="Item 3" icon="plus" @click.prevent="log(3)" />
        <b-dropdown-item title="Item 4" icon="plus" @click.prevent="log(4)" />
      </b-dropdown>
    </div>
  </article>
</template>

<script>
import BDropdown from '../components/BDropdown/BDropdown'
import BDropdownTitle from '../components/BDropdown/BDropdownTitle'
import BDropdownItem from '../components/BDropdown/BDropdownItem'
import BDropdownDivider from '../components/BDropdown/BDropdownDivider'

export default {
  name: 'b-dropdown-view',
  components: {
    BDropdown,
    BDropdownTitle,
    BDropdownItem,
    BDropdownDivider,
  },
  methods: {
    log: function (item) {
      console.log('Clicked item ' + item + ' from the dropdown.')
    },
  },
}
</script>
