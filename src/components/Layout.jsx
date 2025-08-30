// Layout.jsx
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./NavBar";
import Footer from "./Footer";

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
