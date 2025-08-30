// Footer.jsx
import { Box, Text } from "@chakra-ui/react";
import { footerBoxStyle } from "../styles/footerStyles";

export default function Footer() {
  return (
    <Box {...footerBoxStyle}>
      <Text>© 2025 MySite</Text>
    </Box>
  );
}
