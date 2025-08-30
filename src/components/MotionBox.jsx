// MotionBox.jsx
import { chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

// Chakra + Motion 래퍼
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export default MotionBox;
