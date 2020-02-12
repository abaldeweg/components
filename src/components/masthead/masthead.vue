<template>
  <header class="masthead">
    <nav class="masthead_nav">
      <button class="masthead_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25.000001 25.000001"
          class="icon"
        >
          <path d="M0 2h25v4H0zm0 16h25v4H0zm0-8h25v4H0z" />
        </svg>
      </button>
    </nav>
    <div class="masthead_logo">
      <slot />
    </div>
    <div class="masthead_settings">
      <button class="masthead_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 50 50"
          class="icon"
        >
          <g>
            <path d="M20 4h10v10H20zM20 36h10v10H20zM20 20h10v10H20z" />
          </g>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'masthead'
}
</script>

<style scoped>
.masthead {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--color-neutral-00);
  width: 100%;
  height: var(--masthead-height);
  border-bottom: 1px solid var(--color-neutral-04);
  z-index: 3;
}
.masthead_nav {
  margin: 0 20px;
}
.masthead_logo {
  flex-grow: 2;
  text-align: center;
  margin: 0 20px;
}
.masthead_settings {
  margin: 0 20px;
}
.masthead_btn {
  border: 0;
  background: transparent;
  padding: 0;
}

@media print {
  .masthead_nav,
  .masthead_settings {
    display: none;
  }
}
</style>
