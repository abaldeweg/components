<template>
  <li class="dropdown-item" @click="$emit('click', $event)">
    <div class="dropdown-item_icon" v-if="icon">
      <b-icon :type="icon" :size="15" noHover />
    </div>
    <div class="dropdown-item_title">
      {{ title }}
    </div>
  </li>
</template>

<script>
import BIcon from '../BIcon/BIcon'

export default {
  name: 'b-dropdown-item',
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  components: {
    BIcon,
  },
}
</script>

<style scoped>
.dropdown-item {
  display: flex;
  align-items: center;
  padding: 5px 20px;
  cursor: pointer;
}
.dropdown-item:hover {
  background: var(--color-neutral-02);
}
.dropdown-item:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.dropdown-item:last-child {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.dropdown a,
.dropdown a:hover {
  display: block;
  width: 100%;
  color: var(--color-neutral-10);
}
.dropdown-item_title {
  width: 100%;
}
.dropdown-item_icon {
  display: flex;
  margin-right: 20px;
}
</style>
