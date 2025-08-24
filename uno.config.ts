import { defineConfig, presetAttributify } from "unocss";
import presetIcons from "@unocss/preset-icons";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons({
      scale: 1.3,
      extraProperties: {
        "display": "inline-block",
        "vertical-align": "middle",
      }
    })
  ],
  rules: [
    ["no-bullet", { "list-style-type": "none" }]
  ]
});