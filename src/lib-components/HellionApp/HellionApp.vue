<template>
  <span class="hellion-app">
    <slot></slot>
  </span>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import hellionApp from "../../hooks/hellion-app";
import { HellionOptions } from "../../hooks/hellion-app/interfaces";
export default defineComponent({
  name: "HellionApp",
  props: {
    options: { type: Object as PropType<HellionOptions>, default: null },
  },
  components: {},
  setup(props) {
    hellionApp.init(props.options);
    return {
      hellionApp,
    };
  },
});
</script>
<style>
@import "../../css/theme.css";
</style>
