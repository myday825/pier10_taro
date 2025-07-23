import React from "react";
import { motion } from "framer-motion";
const Star = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <span>별자리선택 페이지</span>
    </motion.div>
  );
};

export default Star;
