// Layout.jsx
import Navbar from "./NavBar";
import Footer from "./Footer";
import { Box, Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box>
      <Navbar />
      <Container maxW="6xl" py={6}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
