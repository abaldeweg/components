<template>
  <pre class="codeblock">
    <code>
      <slot/>
    </code>
  </pre>
</template>

<script>
export default {
  name: 'b-code'
}
</script>

<style scoped>
.codeblock {
  background: var(--color-neutral-02);
  padding: 20px;
  overflow: auto;
  font-family: var(--font-monospace);
}
code {
  background: var(--color-neutral-02);
  font-family: var(--font-monospace);
}
</style>
