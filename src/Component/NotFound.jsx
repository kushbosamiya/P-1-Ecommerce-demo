import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Header from "../Component/Header";
import errorImg from "../Assets/404/dog-astronaut.png";
const NotFound = () => {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Box display={["flex"]} flexDirection={["column"]}>
        <Image
          src={errorImg}
          alt={"error"}
          boxSize={["80%", "60%", "50%", "40%"]}
          mx={["10%", "auto"]}
          py={["4"]}
          objectFit={["contain"]}
        />
        <Text
          margin={["auto"]}
          fontSize={["4xl", "5xl", "6xl", "7xl"]}
          px={["4"]}
          py={["4"]}
          fontWeight={"extrabold"}
        >
          Oops Page Not Found
        </Text>
      </Box>
    </motion.div>
  );
};

export default NotFound;
