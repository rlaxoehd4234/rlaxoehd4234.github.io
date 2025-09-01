// src/pages/MainPage.jsx
import { Box, Button, Container, Heading, Text, SimpleGrid, Image, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import posts from "../posts.json";

export default function MainPage() {
  // 프로젝트 더미 데이터
  const projects = [
    {
      title: "출근하자(근태관리플랫폼)",
      description: "직원들의 출퇴근 관리와 채팅, 게시판 서비스",
      image: "https://picsum.photos/600/400?random=1",
      link: "https://github.com/rlaxoehd4234/chulgunhaza-backend",
    },
    {
      title: "시정조치프로그램(더존비즈온연계 프로젝트)",
      description: "시정이 필요한 일들을 효율적으로 처리하기 위한 프로젝트",
      image: "https://private-user-images.githubusercontent.com/92311926/290033658-dbd99772-9369-4e6d-98a3-ad4b7373b1af.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTY3MTI5MzksIm5iZiI6MTc1NjcxMjYzOSwicGF0aCI6Ii85MjMxMTkyNi8yOTAwMzM2NTgtZGJkOTk3NzItOTM2OS00ZTZkLTk4YTMtYWQ0YjczNzNiMWFmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTAxVDA3NDM1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThhZGRkZjg0M2Q5ZTFhMmVhYjc5ZjBkNTMxNDNhODExODAyNzk5MTQ3MGYxOTA5NDJjZWNmZTM3ZmNlMTljMWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.FVZ3CaMYK_aa59qf17Y4tFTzvZQtKE7YLLnxZX9Kxa0",
      link: "https://github.com/rlaxoehd4234/douzoneCorrectiveAction",
    },
    {
      title: "Umbrella-개발자 협업 플랫폼",
      description: "Notion, Discord 등 개발자들이 필요로 하는 기능을 모은 플랫폼",
      image: "https://private-user-images.githubusercontent.com/92311926/397373052-3ae04c6c-ee6b-49af-8e4d-b20e884f1e7d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTY3MTMwNDQsIm5iZiI6MTc1NjcxMjc0NCwicGF0aCI6Ii85MjMxMTkyNi8zOTczNzMwNTItM2FlMDRjNmMtZWU2Yi00OWFmLThlNGQtYjIwZTg4NGYxZTdkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA5MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwOTAxVDA3NDU0NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEzMDU1NmYxODlhN2VlOGNhMzAyNmQxNWFhNTVmMWNlNmQ2YTllZTY0MmY1NmU4NWRkODJmMWMxYWU1ZTU1MGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.bJBKCKAmiK9Qgq2EXJmXoFfvRZjM8E_Tl_iyTKcXFJg",
      link: "https://github.com/rlaxoehd4234/Umbrella",
    },
  ];

  return (
    <>
      {/* Home + About 섹션 */}
      <section id="home" style={{ minHeight: "50vh", padding: "2rem" , background: "#f9fafb"  }}>
        {/* 내용 */}
        <Container maxW="5xl" textAlign="center" position="relative" zIndex={1}>
            <Heading size="2xl" mb={4}>묵묵히, 꾸준히</Heading>
            <Text fontSize="lg" mb={4}>
            저는 백엔드 개발자 김태동입니다.
            </Text>
            <Text fontSize="md" mb={10} opacity={0.9}>
            React, Spring, MSA 에 관심이 많고,
            새로운 기술을 배우며 프로젝트를 통해 세상과 연결되는 것을 즐깁니다.
            </Text>

            <HStack spacing={4} justify="center">
            <Button as={Link} href="https://github.com/rlaxoehd4234" target="_blank" colorScheme="blackAlpha">
                GitHub
            </Button>
            <Button as={Link} href="mailto:rlaxoehd4234.com" colorScheme="purple">
                Email
            </Button>
            <Button as={RouterLink} to="/about" colorScheme="yellow" size="lg">
                About Me
            </Button>
            </HStack>
        </Container>
        </section>


      {/* Blog 섹션 */}
      <section id="blog" style={{ minHeight: "50vh", padding: "2rem" , background: "#f9fafb"  }}>
        <Container maxW="6xl">
          <Heading size="xl" textAlign="center" mb={8}>최근 블로그 글</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {posts.slice(0, 3).map((post) => (
              <Box
                key={post.slug}
                shadow="md"
                borderWidth="1px"
                rounded="lg"
                bg="white"
                overflow="hidden"
                _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
                transition="all 0.2s"
              >
                <Image
                  src={post.image || "https://via.placeholder.com/600x400"}
                  alt={post.title}
                  w="100%"
                  h="180px"
                  objectFit="cover"
                />
                <Box p={5}>
                  <Heading size="md" mb={2} color="green.600" noOfLines={1}>
                    <RouterLink to={`/blog/${post.slug}`}>{post.title}</RouterLink>
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    ✍ {post.author} · {post.date}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
          <Box textAlign="center" mt={8}>
            <Button as={RouterLink} to="/blog" colorScheme="green">
              블로그 더보기 →
            </Button>
          </Box>
        </Container>
      </section>

      {/* Projects 섹션 */}
      <section id="projects" style={{ minHeight: "60vh", padding: "2rem", background: "#f9fafb" }}>
        <Container maxW="6xl">
          <Heading size="xl" textAlign="center" mb={8}>프로젝트</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {projects.map((project) => (
              <Box
                key={project.title}
                shadow="md"
                borderWidth="1px"
                rounded="lg"
                bg="white"
                overflow="hidden"
                _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
                transition="all 0.2s"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  w="100%"
                  h="180px"
                  objectFit="cover"
                />
                <Box p={5}>
                  <Heading size="md" mb={2} color="purple.600" noOfLines={1}>
                    {project.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" mb={4}>
                    {project.description}
                  </Text>
                  <Button
                    as={Link}
                    href={project.link}
                    target="_blank"
                    colorScheme="purple"
                    size="sm"
                  >
                    자세히 보기
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </section>
    </>
  );
}
