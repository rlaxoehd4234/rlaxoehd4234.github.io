import { Box, Heading, Text, Stack, Image, Divider, Button } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <Box maxW="800px" mx="auto" p={6}>
      {/* 프로필 섹션 */}
      <Stack direction={{ base: "column", md: "row" }} spacing={6} align="center">
        <Image
          src="/profile.jpg" // public 폴더에 본인 프로필 이미지 추가
          alt="Profile"
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
        />
        <Box>
          <Heading size="lg">김태동</Heading>
          <Text mt={2} color="gray.600">
            프론트엔드 개발자 / 미디어 커뮤니케이션 연구자
          </Text>
          <Button mt={4} colorScheme="blue" as="a" href="/resume.pdf" target="_blank">
            이력서 다운로드
          </Button>
        </Box>
      </Stack>

      <Divider my={8} />

      {/* 소개 섹션 */}
      <Box>
        <Heading size="md" mb={3}>
          자기소개
        </Heading>
        <Text color="gray.700">
          안녕하세요! 저는 React, Spring Boot, AWS를 활용한 웹 서비스 개발에 관심이 많고,
          동시에 미디어 커뮤니케이션 연구를 진행하고 있습니다.
          디자인 아웃소싱 플랫폼, 채팅 시스템, 데이터 분석 프로젝트 등을 경험하며
          사용자 친화적인 UI와 안정적인 백엔드를 구현하는 데 집중해왔습니다.
        </Text>
      </Box>

      <Divider my={8} />

      {/* 기술 스택 */}
      <Box>
        <Heading size="md" mb={3}>
          기술 스택
        </Heading>
        <Stack direction="row" spacing={4} wrap="wrap">
          <Text>⚛️ React</Text>
          <Text>🌱 Spring Boot</Text>
          <Text>🐬 MySQL</Text>
          <Text>☁️ AWS (EC2, S3, RDS)</Text>
          <Text>📊 R / SPSS / Python</Text>
        </Stack>
      </Box>

      <Divider my={8} />

      {/* 프로젝트 경험 */}
      <Box>
        <Heading size="md" mb={3}>
          프로젝트
        </Heading>
        <Stack spacing={4}>
          <Box>
            <Heading size="sm">📌 디자인 아웃소싱 플랫폼</Heading>
            <Text fontSize="sm" color="gray.600">
              클라이언트와 디자이너를 연결하는 웹 서비스.  
              S3를 이용한 파일 업로드, 실시간 채팅, 결제 기능 구현.
            </Text>
          </Box>

          <Box>
            <Heading size="sm">📌 데이터 분석 (EPU & 산업 고용)</Heading>
            <Text fontSize="sm" color="gray.600">
              경제정책 불확실성이 산업별 고용에 미치는 영향 연구.  
              R을 활용한 GAM-SFA 분석 수행.
            </Text>
          </Box>

          <Box>
            <Heading size="sm">📌 마인크래프트 플러그인 개발</Heading>
            <Text fontSize="sm" color="gray.600">
              Paper 1.21.4 기반 커스텀 플러그인.  
              출석체크, 칭호 시스템, MySQL 연동 기능 구현.
            </Text>
          </Box>
        </Stack>
      </Box>

      <Divider my={8} />

      {/* 연락처 */}
      <Box>
        <Heading size="md" mb={3}>
          연락하기
        </Heading>
        <Text>Email: your_email@example.com</Text>
        <Text>GitHub: https://github.com/your-id</Text>
        <Text>LinkedIn: https://linkedin.com/in/your-id</Text>
      </Box>
    </Box>
  );
}
