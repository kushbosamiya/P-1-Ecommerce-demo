import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { CartState } from "../Context/context";
import Header from "../../Component/Header";
import error from "../../Assets/404/woman.png";
import CartPageData from "../CartPageData";
import Footer from "../../Component/Footer";

const CartPage = () => {
  const {
    state: { cart },
  } = CartState();
  return (
    <>
      <Header />
      {cart.length === 0 ? (
        <Box
          display={["flex", "flex"]}
          flexDirection={["column", "column"]}
          justifyContent={["center"]}
        >
          <Image
            src={error}
            boxSize={["80%", "60%", "50%", "40%"]}
            mx={["10%", "auto"]}
            py={["4"]}
            objectFit={["contain"]}
            alt={"woman"}
          />
          <Text
            margin={["auto"]}
            fontSize={["4xl", "5xl", "6xl", "7xl"]}
            px={["4"]}
            py={["4"]}
            fontWeight={"extrabold"}
          >
            Cart is empty
          </Text>
          <Footer />
        </Box>
      ) : (
        <CartPageData />
      )}
    </>
  );
};

export default CartPage;
