import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SlideMenuButton({ onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen); // 부모 컴포넌트에서 메뉴 열기/닫기 제어
  };

  return (
    <IconButton
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      aria-label="Menu"
      onClick={handleClick}
    />
  );
}
