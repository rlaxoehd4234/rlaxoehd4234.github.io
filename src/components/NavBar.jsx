import { Box, Flex, HStack, IconButton, Button, Stack, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AnimatePresence } from "framer-motion";
import MotionBox from "./MotionBox";
import { hStackStyle, navbarBoxStyle, navbarFlexStyle } from "../styles/navbarStyles";

const Links = ["Home", "About", "Blog"];

// 버튼 클릭 시 해당 섹션으로 스크롤
const NavButton = ({ children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById(children.toLowerCase());
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button variant="ghost" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box {...navbarBoxStyle}>
      <Flex {...navbarFlexStyle}>
        {/* 로고 */}
        <Box fontWeight="bold" fontSize="xl">MySite</Box>

        {/* 데스크탑 버튼 메뉴 */}
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

      {/* 모바일 슬라이딩 메뉴 */}
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
