// src/pages/PostPage.jsx
import { useParams } from "react-router-dom";
import posts from "../posts.json";
import {
  Box,
  Heading,
  Text,
  Container,
  Image,
  Divider,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

export default function PostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Box p={6}>❌ 해당 글을 찾을 수 없습니다.</Box>;
  }

  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="3xl" bg="white" p={8} rounded="lg" shadow="md">
        {/* 대표 이미지 */}
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            w="100%"
            h="300px"
            objectFit="cover"
            rounded="md"
            mb={6}
          />
        )}

        {/* 제목 */}
        <Heading size="2xl" color="purple.600" mb={4}>
          {post.title}
        </Heading>

        {/* 메타 정보 */}
        <Text fontSize="sm" color="gray.500" mb={6}>
          ✍ {post.author || "작성자 미상"} · 📅 {post.date}
        </Text>

        <Divider mb={6} />

        {/* 본문 */}
        <Box
          className="markdown-body"
          sx={{
            h1: { fontSize: "2xl", fontWeight: "bold", marginTop: 6, mb: 3 },
            h2: { fontSize: "xl", fontWeight: "semibold", marginTop: 5, mb: 2 },
            p: { mb: 4, lineHeight: "1.8", color: "gray.700" },
            ul: { pl: 5, mb: 4 },
            li: { mb: 2 },
            code: {
              bg: "gray.100",
              px: 1,
              py: 0.5,
              borderRadius: "md",
              fontSize: "sm",
            },
            img: { borderRadius: "md", my: 4 },
          }}
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </Box>
      </Container>
    </Box>
  );
}
