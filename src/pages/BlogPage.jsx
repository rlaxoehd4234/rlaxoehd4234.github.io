// src/pages/BlogPage.jsx
import { useState, useEffect } from "react";
import posts from "../posts.json";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Link,
  Image,
  SimpleGrid,
  Spinner,
  Container,
} from "@chakra-ui/react";

export default function BlogPage() {
  const pageSize = 9;
  const [visibleCount, setVisibleCount] = useState(pageSize);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= docHeight - 50) {
        setVisibleCount((prev) =>
          Math.min(prev + pageSize, posts.length)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <Box bg="purple.50" minH="100vh">
      {/* 상단 배너 (텍스트 제거) */}
      <Box
        position="relative"
        h="280px"
        mb={10}
        backgroundImage={`url("https://cdn.pixabay.com/photo/2013/06/20/13/52/world-140304_640.jpg")`} 
        backgroundSize="cover"
        backgroundPosition="center"
      >
      </Box>

      {/* 본문 */}
      <Container maxW="7xl">
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {visiblePosts.map((post) => (
            <Box
              key={post.slug}
              shadow="md"
              borderWidth="1px"
              rounded="lg"
              bg="white"
              overflow="hidden"
              _hover={{ shadow: "xl", transform: "translateY(-6px)" }}
              transition="all 0.2s"
            >
              {/* 대표 이미지 */}
              <Image
                src={post.image || "https://via.placeholder.com/600x400"}
                alt={post.title}
                w="100%"
                h="200px"
                objectFit="cover"
              />

              {/* 내용 */}
              <Box p={5}>
                <Heading size="md" mb={2} color="purple.600" noOfLines={1}>
                  <Link as={RouterLink} to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  ✍ {post.author || "작성자 미상"}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* 로딩 스피너 */}
        {visibleCount < posts.length && (
          <Box textAlign="center" mt={10}>
            <Spinner size="lg" color="purple.500" />
          </Box>
        )}
      </Container>
    </Box>
  );
}
