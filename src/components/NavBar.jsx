// Navbar.jsx
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AnimatePresence } from "framer-motion";
import MotionBox from "./MotionBox";

const Links = ["Home", "About", "Services", "Contact"];

const NavLink = ({ children }) => (
  <Link
    px={3}
    py={2}
    rounded="md"
    _hover={{ bg: "blue.500", color: "white" }}
    href={`/${children.toLowerCase()}`}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" px={4} shadow="md" position="sticky" top="0" zIndex="100">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/* Logo */}
        <Text fontWeight="bold" fontSize="xl" color="blue.600">
          MySite
        </Text>

        {/* 데스크탑 메뉴 */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        {/* 모바일 햄버거 버튼 */}
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* 모바일 메뉴 (Motion 애니메이션) */}
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            pb={4}
            display={{ md: "none" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Stack as={"nav"} spacing={2}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </MotionBox>
        )}
      </AnimatePresence>
    </Box>
  );
}
