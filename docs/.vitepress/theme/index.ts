// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "./custom.css"
import 'virtual:uno.css'

import { NolebaseHighlightTargetedHeading } from "@nolebase/vitepress-plugin-highlight-targeted-heading";
import "@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css";

/** @type {import("vitepress").Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "layout-top": () => [
        h(NolebaseHighlightTargetedHeading)
      ]
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
};
