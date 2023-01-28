import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ff3c00",
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  fonts: {
    body: "Open Sans,sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
      },
    }),
  },
  components: {
    Button,
  },
});
