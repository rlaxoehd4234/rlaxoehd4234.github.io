import { Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

export default function SliderButton() {
  const [on, setOn] = useState(false);

  return (
    <MotionBox
      width="60px"
      height="30px"
      borderRadius="15px"
      bg={on ? "purple.400" : "gray.300"}
      cursor="pointer"
      onClick={() => setOn(!on)}
      position="relative"
      display="flex"
      alignItems="center"
      padding="2px"
    >
      <MotionBox
        width="26px"
        height="26px"
        borderRadius="50%"
        bg="white"
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{ x: on ? 30 : 0 }}
      />
    </MotionBox>
  );
}
