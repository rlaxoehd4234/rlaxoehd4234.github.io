// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f5f0ff",
      100: "#e6dfff",
      200: "#d0bfff",
      300: "#b199ff",
      400: "#9473ff",
      500: "#794bff",
    },
  },
  components: {
    MotionBox: {
      baseStyle: {
        p: 5,
        maxW: "320px",
        borderWidth: 1,
        borderRadius: "lg",
      },
      variants: {
        hoverScale: {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          transition: { duration: 0.3, ease: "easeInOut" },
        },
      },
    },
  },
});

export default theme;
