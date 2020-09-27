<template>
  <div class="actionbar">
    <div class="actionbar_input">
      <slot name="input" />
    </div>

    <div class="actionbar_actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'b-actionbar',
}
</script>

<style scoped>
.actionbar {
  display: flex;
}
.actionbar_input {
  flex-grow: 1;
}
.actionbar_actions {
  margin-left: 10px;
}
</style>
