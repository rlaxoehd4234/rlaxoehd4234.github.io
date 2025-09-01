import { Box, Flex, HStack, IconButton, Button, Stack, useDisclosure, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AnimatePresence } from "framer-motion";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import MotionBox from "./MotionBox";
import { hStackStyle, navbarBoxStyle, navbarFlexStyle } from "../styles/navbarStyles";

const Links = ["Home", "Blog"];

const NavButton = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // 메인 페이지가 아니면 먼저 메인으로 보내고
      navigate("/", { replace: false });
      // 약간의 딜레이 후 스크롤 (setTimeout)
      setTimeout(() => {
        const section = document.getElementById(children.toLowerCase());
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // 이미 메인에 있으면 그냥 스크롤
      const section = document.getElementById(children.toLowerCase());
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button variant="ghost" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogoClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box {...navbarBoxStyle}>
      <Flex {...navbarFlexStyle}>
        {/* 로고 */}
        <Box
          as="button"
          onClick={handleLogoClick}
          display="flex"
          alignItems="center"
        >
          <Image src="/bear-logo.png" alt="Logo" boxSize="40px" mr={2} />
          <Box fontWeight="bold" fontSize="xl">
            태동지산센터
          </Box>
        </Box>

        {/* 데스크탑 버튼 */}
        <HStack {...hStackStyle}>
          {Links.map((link) => (
            <NavButton key={link}>{link}</NavButton>
          ))}
        </HStack>

        {/* 모바일 햄버거 버튼 */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            display={{ md: "none" }}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            bg="white"
            position="absolute"
            top="60px"
            left={0}
            width="100%"
            shadow="md"
            zIndex={99}
            pb={4}
          >
            <Stack as="nav" spacing={2} align="center">
              {Links.map((link) => (
                <NavButton key={link}>{link}</NavButton>
              ))}
            </Stack>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}
