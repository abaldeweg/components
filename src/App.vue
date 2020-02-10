<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* Variables */
html {
  /* Primary */
  --color-primary-10: #0000ff;
  --color-primary-05: #8b8bff;
  --color-primary-00: #e7e7ff;
  /* Neutral */
  --color-neutral-10: #333333;
  --color-neutral-08: #4f4f4f;
  --color-neutral-06: #828282;
  --color-neutral-04: #b8b8b8;
  --color-neutral-02: #cbcbcb;
  --color-neutral-00: #ffffff;
  /* Accent */
  --color-accent-red-10: #ff0000;
  --color-accent-red-05: #ff7373;
  --color-accent-red-00: #ffe7e7;
  --color-accent-green-10: #00ff00;
  --color-accent-green-05: #8bff8b;
  --color-accent-green-00: #e7ffe7;
  --color-accent-yellow-10: #f1d302;
  --color-accent-yellow-05: #f8eb8c;
  --color-accent-yellow-00: #fdfbe8;
  /* Font */
  --font-sans: 'Open Sans', 'Liberation Sans', 'Helvetica Neue', Arial;
  --font-serif: Georgia, Constantia, 'DejaVu Serif', 'Times New Roman';
  --font-monospace: Consolas, 'Liberation Mono', 'Lucida Console';
  /* Misc */
  --masthead-height: 50px;
}

html[dark] {
  /* Primary */
  --color-primary-10: #e1661e;
  --color-primary-05: #eeab84;
  --color-primary-00: #fcf1ea;
  /* Neutral */
  --color-neutral-10: #ffffff;
  --color-neutral-08: #cbcbcb;
  --color-neutral-06: #b8b8b8;
  --color-neutral-04: #828282;
  --color-neutral-02: #4f4f4f;
  --color-neutral-00: #333333;
}
</style>
