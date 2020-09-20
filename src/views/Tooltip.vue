<template>
  <article>
    <button v-tooltip.top="'Text'" style="width: 300px">Tooltip Top</button>
    <button v-tooltip.bottom="'Text'" style="width: 300px">
      Tooltip Bottom
    </button>
    <button v-tooltip.left="'Text'" style="width: 300px">Tooltip Left</button>
    <button v-tooltip.right="'Text'" style="width: 300px">Tooltip Right</button>

    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>
    <p>
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
    </p>

    <button v-tooltip.top="'Text'" style="width: 300px">Tooltip Top</button>
    <button v-tooltip.bottom="'Text'" style="width: 300px">
      Tooltip Bottom
    </button>
    <button v-tooltip.left="'Text'" style="width: 300px">Tooltip Left</button>
    <button v-tooltip.right="'Text'" style="width: 300px">Tooltip Right</button>
  </article>
</template>

<script>
import Tooltip from '../directives/tooltip'

export default {
  name: 'tooltip-view',
  directives: {
    Tooltip,
  },
}
</script>
