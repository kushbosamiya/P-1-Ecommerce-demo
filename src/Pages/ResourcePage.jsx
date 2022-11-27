import React from "react";
// import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ResourcePage = () => {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      This is Resource page
    </motion.div>
  );
};

export default ResourcePage;
