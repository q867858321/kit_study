
<template>
  <!-- eslint-disable vue/require-component-is -->
  <router-link :to="to">
    <slot />
  </router-link>
  <!-- <component v-bind="linkProps(to)">
    <slot />
  </component>-->
</template>

<script>
import { isExternal } from "@/utils/validate";

export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    linkProps(url) {
      console.log("url", url);
      if (isExternal(url)) {
        return {
          is: "a",
          href: url,
          target: "_blank",
          rel: "noopener",
        };
      }
      return {
        is: "router-link",
        to: url,
      };
    },
  },
};
</script>
