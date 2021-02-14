<template>
  <div>
    <hellion-app>
      <div>Button - Sizes</div>
      <hellion-button x-small>Test Button</hellion-button>
      <hellion-button color="secondary" small>Test Button</hellion-button>
      <hellion-button color="success">Test Button</hellion-button>
      <hellion-button color="warning" big>Test Button</hellion-button>
      <hellion-button color="error" x-big>Test Button</hellion-button>
      <hellion-button color="info">Test Button</hellion-button>
      <div>Button - Other</div>
      <hellion-button icon="ant-design:home-filled">Test Icon</hellion-button>
      <hellion-button color="kristen" iconLeft icon="ant-design:home-filled">
        Test Icon Left
      </hellion-button>

      <hellion-button icon="ant-design:home-filled" loading>
        Test Loading
      </hellion-button>
      <hellion-button icon="ant-design:home-filled" iconLeft loading>
        Test Loading
      </hellion-button>
      <hellion-button disabled>Disabled</hellion-button>
      <hellion-button roundness="4">Test Button Roundness</hellion-button>
      <hellion-button roundness="0" color="success">
        Test Button Roundness
      </hellion-button>
      <div>Button - Outline</div>
      <hellion-button outlined x-small>Test Button</hellion-button>
      <hellion-button outlined color="secondary" small
        >Test Button</hellion-button
      >
      <hellion-button outlined color="success">Test Button</hellion-button>
      <hellion-button outlined color="warning" big>Test Button</hellion-button>
      <hellion-button outlined color="error" x-big>Test Button</hellion-button>
      <hellion-button outlined color="info">Test Button</hellion-button>
    </hellion-app>
    <hellion-button roundness="10" icon="ant-design:home-filled" squared x-small></hellion-button>
    <hellion-button roundness="0.9" icon="ant-design:home-filled" squared color="secondary" small></hellion-button>
    <hellion-button roundness="0.5" icon="ant-design:home-filled" squared color="success"></hellion-button>
    <hellion-button disabled roundness="1" icon="ant-design:home-filled" squared color="warning" big></hellion-button>
    <hellion-button icon="ant-design:home-filled" squared color="error" x-big></hellion-button>
    <hellion-button loading icon="ant-design:home-filled" squared color="info"></hellion-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Iconify from "@iconify/iconify";

export default defineComponent({
  components: {},
  name: "ServeDev",
  // components: {
  //  HellionUiSample,
  // }
  setup() {
    Iconify.ready(() => {
      //
    });
  },
});
</script>
