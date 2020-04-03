<template>
  <div id="app">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'b-app',
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

  color: var(--color-neutral-10);
  font-family: var(--font-sans);
  font-size: 18px;
  padding: 0;
  margin: 0;
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
body {
  background: var(--color-neutral-00);
  padding: 0;
  margin: 0;
}
::selection {
  color: var(--color-neutral-00);
  background: var(--color-primary-10);
}
::-moz-selection {
  color: var(--color-neutral-00);
  background: var(--color-primary-10);
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background: var(--color-neutral-06);
}
::-webkit-scrollbar-track-piece {
  background: var(--color-neutral-02);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-neutral-08);
}
img,
picture,
audio,
video {
  max-width: 100%;
  height: auto;
}
a {
  color: var(--color-primary-10);
  text-decoration: none;
}
a:hover {
  color: var(--color-primary-10);
  text-decoration: none;
}
p {
  padding: 10px 0;
  margin: 0;
}
li li {
  margin-left: 20px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: var(--font-serif);
}
h1 {
  font-size: 1.6em;
  word-break: break-all;
}
h2 {
  font-size: 1.2em;
  word-break: break-all;
}
h3 {
  font-size: 1em;
  word-break: break-all;
}
.hidden {
  display: none;
  visibility: hidden;
}
.visuallyHidden {
  position: absolute;
  border: 0;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

@media all and (min-width: 1200px) {
  html {
    font-size: 20px;
  }
}

@media all and (min-width: 600px) {
  h1 {
    font-size: 2.1em;
  }
  h2 {
    font-size: 1.6em;
  }
  h3 {
    font-size: 1.5em;
  }
}
</style>
