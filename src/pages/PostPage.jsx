// src/pages/PostPage.jsx
import { useParams } from "react-router-dom";
import posts from "../posts.json";
import {
  Box,
  Heading,
  Text,
  Container,
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
    <Box bg="gray.100" minH="100vh" py={12}>
      <Container maxW="4xl" bg="white" p={[6, 10]} rounded="md" shadow="sm">
        {/* 제목 */}
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="gray.800"
          mb={3}
          lineHeight="short"
        >
          {post.title}
        </Heading>

        {/* 메타 정보 */}
        <Text fontSize="sm" color="gray.500" mb={8}>
          ✍ {post.author || "작성자 미상"} · 📅 {post.date}
        </Text>

        <Divider mb={8} />

        {/* 본문 */}
        <Box
          className="markdown-body"
          sx={{
            h1: {
              fontSize: "2xl",
              fontWeight: "bold",
              mt: 10,
              mb: 4,
              color: "gray.800",
            },
            h2: {
              fontSize: "xl",
              fontWeight: "semibold",
              mt: 8,
              mb: 3,
              color: "gray.700",
            },
            p: {
              mb: 6,
              lineHeight: "1.9",
              fontSize: "md",
              color: "gray.700",
            },
            ul: { pl: 6, mb: 6 },
            li: { mb: 2 },
            blockquote: {
              pl: 4,
              borderLeft: "4px solid #805AD5",
              color: "gray.600",
              fontStyle: "italic",
              mb: 6,
            },
            code: {
              bg: "gray.100",
              px: 1.5,
              py: 0.5,
              borderRadius: "md",
              fontSize: "sm",
              fontFamily: "monospace",
            },
            pre: {
              bg: "gray.900",
              color: "gray.100",
              p: 4,
              borderRadius: "md",
              overflowX: "auto",
              mb: 6,
            },
            img: {
              borderRadius: "md",
              my: 6,
              maxH: "400px",
              mx: "auto",
            },
          }}
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </Box>
      </Container>
    </Box>
  );
}
