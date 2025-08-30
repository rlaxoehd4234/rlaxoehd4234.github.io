// MotionBox.jsx
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) || prop === "children",
});

export default MotionBox;
