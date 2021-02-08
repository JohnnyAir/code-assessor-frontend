import { extendTheme, ThemeConfig, ThemeOverride } from "@chakra-ui/react";
import { colors } from "./colors";

const fonts  = {
  body: "Poppins, sans-serif",
  heading: "Montserrat, serif",
  mono: "Menlo, monospace",
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides: ThemeOverride = {
  fonts,
  colors,
  config,
};

export default extendTheme(overrides);
