import { reactive } from "vue";
import cssEngine from "../css-engine";
import colorEngine from "../css-engine/color-engine";
import { HellionOptions } from "./interfaces";

const options: HellionOptions = reactive({
  colors: {
    primary: "#F95D36",
    secondary: "#D6AF76",
    tertiary: "#293639",
    info: "#1f151f",
    success: "#7d8f43",
    warning: "#fb7f0b",
    error: "#f44336",
  },
  font:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  dark: false,
});

const colorVariants = [
  { name: "light", lum: 0.1 },
  { name: "lighter", lum: 0.2 },
  { name: "lightest", lum: 0.3 },
  { name: "dark", lum: -0.1 },
  { name: "darker", lum: -0.2 },
  { name: "darkest", lum: -0.3 },
];

async function loadColors() {
  Object.entries(options.colors).forEach((color) => {
    const [key, value] = color;
    cssEngine.inject(":root", `--color-${key}`, value);
    cssEngine.inject(":root", `--color-${key}`, value);
    cssEngine.inject(":root", `--color-${key}-transparent`, `${value}80`);
    cssEngine.inject(
      ":root",
      `--color-${key}-text`,
      colorEngine.assignTextColor(value)
    );
    colorVariants.forEach((variant) => {
      cssEngine.inject(
        ":root",
        `--color-${key}-${variant.name}`,
        colorEngine.createColorVariant(value, variant.lum)
      );
    });
  });
}

function init(userOptions: HellionOptions | null) {
  if (userOptions) {
    options.colors = userOptions.colors;
    options.dark = userOptions.dark;
  }
  cssEngine.init();
  loadColors();
  cssEngine.inject(":root", "--font", options.font);
}

const hellionApp = reactive({
  init,
});

export default hellionApp;
