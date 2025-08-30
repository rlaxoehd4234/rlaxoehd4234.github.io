// Home.jsx
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box id="home" minH="100vh" bg="purple.50" p={8}>
        <Heading>Home Section</Heading>
        <Text>Welcome to MySite!</Text>
      </Box>

      <Box id="about" minH="100vh" bg="purple.100" p={8}>
        <Heading>About Section</Heading>
        <Text>About our company...</Text>
      </Box>

      <Box id="blog" minH="100vh" bg="purple.200" p={8}>
        <Heading>Blog Section</Heading>
        <Text>Latest blog posts...</Text>
      </Box>
    </>
  );
}
