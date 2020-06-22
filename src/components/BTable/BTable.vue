<template>
  <div class="table">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-table',
}
</script>

<style scoped>
.table {
  overflow: auto;
}
table {
  width: 100%;
  border-spacing: 0;
  padding: 0;
  margin: 0;
  overflow: auto;
}
th {
  text-align: left;
}
th,
td {
  border-bottom: 1px solid var(--color-neutral-02);
  vertical-align: top;
  padding: 10px;
}
th:nth-child(1),
td:nth-child(1) {
  padding-left: 0;
}
th:nth-last-child(1),
td:nth-last-child(1) {
  padding-right: 0;
}
</style>
