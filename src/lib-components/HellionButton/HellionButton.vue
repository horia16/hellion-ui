<template>
  <button
    class="hellion-button"
    :id="id"
    :class="[
      disabled || loading
        ? outlined
          ? `btn-disabled btn-disabled-outlined-${color}`
          : `btn-disabled btn-disabled-${color}`
        : outlined
        ? `btn-outlined-${color}`
        : `btn-${color}`,
      ,
      squared
        ? small
          ? 'btn-small-squared'
          : big
          ? 'btn-big-squared'
          : xSmall
          ? 'btn-x-small-squared'
          : xBig
          ? 'btn-x-big-squared'
          : ''
        : small
        ? 'btn-small'
        : big
        ? 'btn-big'
        : xSmall
        ? 'btn-x-small'
        : xBig
        ? 'btn-x-big'
        : '',

      squared ? 'btn-squared' : '',
    ]"
    :style="{
      borderRadius: `${roundness}rem`,
      flexDirection: iconLeft ? 'row-reverse' : '',
    }"
    :disabled="disabled || loading"
  >
    <span><slot></slot></span>

    <hellion-icon
      v-if="icon || loading"
      :class="loading ? 'spin' : ''"
      :name="loading ? 'gg:spinner' : icon"
      :style="{
        marginLeft: squared ? '' : iconLeft ? '' : '0.4rem',
        marginRight: squared ? '' : squared ? '' : iconLeft ? '0.4rem' : '',
      }"
    />
  </button>
</template>
<script lang="ts">
import cssEngine from "@/hooks/css-engine";
import { defineComponent, ref } from "vue";
import { shortId } from "../../hooks/id";
import HellionIcon from "../HellionIcon/HellionIcon.vue";
export default defineComponent({
  name: "AppButton",
  props: {
    color: { type: String, default: "primary" },
    roundness: { type: [Number, String], default: "0.4" },
    squared: { type: Boolean, default: false },
    xSmall: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    big: { type: Boolean, default: false },
    xBig: { type: Boolean, default: false },
    icon: { type: String, default: null },
    iconLeft: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    outlined: { type: Boolean, default: false },
  },
  components: { HellionIcon },
  setup(props) {
    const id = ref(`btn_${shortId()}`);
    // Default style
    if (!props.outlined) {
      cssEngine.injectObject(
        `.btn-${props.color}`,
        {
          "background-color": `var(--color-${props.color})`,
          color: `var(--color-${props.color}-text)`,
          "box-shadow": `0 0px 0px 1px var(--color-${props.color}-dark),
       0 2px 20px 2px var(--color-${props.color}-transparent)`,
        },
        false,
        true
      );
      // Active style
      cssEngine.injectObject(
        `.btn-${props.color}:active`,
        {
          "background-color": `var(--color-${props.color}-dark)`,
          "box-shadow": `0 0px 0px 1px var(--color-${props.color}-dark), 
      0 5px 10px 2px var(--color-${props.color}-transparent)`,
        },
        false,
        true
      );
    } else {
      cssEngine.injectObject(
        `.btn-outlined-${props.color}`,
        {
          color: `var(--color-${props.color})`,
          "box-shadow": `0 0px 0px 2px var(--color-${props.color}-dark),
       0 2px 20px 2px var(--color-${props.color}-transparent)`,
        },
        false,
        true
      );
      // Active style
      cssEngine.injectObject(
        `.btn-outlined-${props.color}:active`,
        {
          "background-color": `var(--color-${props.color}-transparent)`,
          color: `var(--color-${props.color}-darker)`,
          "box-shadow": `0 0px 0px 2px var(--color-${props.color}-dark), 
      0 5px 10px 2px var(--color-${props.color}-transparent)`,
        },
        false,
        true
      );
    }
    return {
      id,
    };
  },
});
</script>
<style>
.hellion-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  outline: none;
  border: none;
  box-sizing: border-box;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin: 0.7rem;
  user-select: none;
  max-width: calc(100vw - 2rem);
  background-color: transparent;
}
.btn-x-small {
  padding: 0.425rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  font-size: 0.7rem;
}
.btn-small {
  padding: 0.525rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  font-size: 0.8rem;
}
.btn-big {
  padding: 0.825rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  font-size: 1.2rem;
}
.btn-x-big {
  padding: 0.925rem;
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  font-size: 1.3rem;
}

.btn-x-small-squared {
  width: 2rem !important;
  height: 2rem !important;
  font-size: 0.7rem;
}
.btn-small-squared {
  width: 2.4rem !important;
  height: 2.4rem !important;
  font-size: 1rem;
}
.btn-big-squared {
  width: 3rem !important;
  height: 3rem !important;
  font-size: 1.2rem;
}
.btn-x-big-squared {
  width: 3.2rem !important;
  height: 3.2rem !important;
  font-size: 1.4rem;
}

.btn-squared {
  width: 2.6rem;
  height: 2.6rem;
}
.btn-disabled {
  pointer-events: none;
  box-shadow: 0 0px 1px gray;
  background-color: rgb(214, 214, 214);
  color: rgb(98, 98, 98);
}
</style>
