<template>
  <span class="icon" :key="name">
    <span class="iconify" :data-icon="name"></span>
  </span>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HellionIcon",
  props: {
    name: { type: String, default: null },
  },
  components: {},
  setup() {
    return {};
  },
});
</script>
<style></style>
