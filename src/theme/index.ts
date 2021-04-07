import { extendTheme, ThemeConfig, ThemeOverride } from "@chakra-ui/react";
import { colors } from "./colors";
import { FormInput, FormLabel } from "./components/FormInput";

const fonts = {
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
  components: { FormInput, FormLabel },
};

export default extendTheme(overrides);
