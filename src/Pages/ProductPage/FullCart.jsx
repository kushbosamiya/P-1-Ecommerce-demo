import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import FilterCard from "./FilterComponent";
import CartItems from "./CartItems";
import Footer from "../../Component/Footer";

// context Api
import { CartState } from "../Context/context";

const FullComponent = () => {
  return (
    <>
      <Flex
        pos={"absolute"}
        flexDirection={["column"]}
        // px="1rem"
        py="1rem"
        gap={"1rem"}
        mx={"1"}
        top={{ xl: "90%", lg: "80%", md: "80%", base: "90%" }}
        w="100%"
      >
        <FilterPortion />
        <CartItemsPortion />
        <Box pos={"relative"} bottom={{ md: "-50", lg: "-60", xl: "-50" }}>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default FullComponent;

const FilterPortion = ({ children, ...props }) => {
  return (
    <>
      <Flex
        justifyContent={["center", "center"]}
        zIndex={["5"]}
        {...props}
        position={["absolute"]}
        // border={'1px solid'}
        left={["0"]}
        right={["0"]}
        // disrupts at 768
        top={["-20", "-5"]}
        // bottom={["-170"]}
        border="1px solid lightgrey"
        borderRadius={"md"}
        width={"100%"}
        boxShadow={"base"}
      >
        <FilterCard />
      </Flex>
    </>
  );
};

const CartItemsPortion = ({ children, ...props }) => {
  const {
    state: { products },
    productState: { sort, byStock },
  } = CartState();

  // const [Category, setCategory] = useState(
  //   [...products].map((item) => item.category)
  // );

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    // if (!category) {
    //   sortedProducts = sortedProducts.filter(
    //     (item) => item.category === Category
    //   );
    // }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    return sortedProducts;
  };

  return (
    <>
      <Box
        {...props}
        // w={"80vw"}
        overflow="hidden"
        pos={["relative"]}
        top={["2vmax", "6vmax"]}
        right={["1"]}
        margin={["1"]}
      >
        <Box
          display="flex"
          flexWrap={"wrap"}
          mx={{ lg: "15", xl: "10" }}
          justifyContent={"center"}
          mb={{ lg: "4rem", xl: "6rem" }}
        >
          {transformProducts().map((prod) => (
            <CartItems prod={prod} key={prod.id} />
          ))}
        </Box>
      </Box>
    </>
  );
};
