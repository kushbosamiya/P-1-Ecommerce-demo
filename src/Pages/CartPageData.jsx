import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  Tag,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Collapse,
  Stack,
  FormLabel,
  Select,
  FormControl,
} from "@chakra-ui/react";

// import axios from "axios";

// star component
import ReactStars from "react-rating-stars-component";

// context Api
import { CartState } from "./Context/context";

// icons
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CloseIcon } from "@chakra-ui/icons";
// import RemoveIcon from "@mui/icons-material/Remove";
// import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Component/Footer";

const CartPageData = () => {
  return (
    <>
      <CartPageInitialComponent />
      <Box mx={{ xl: "10%", lg: "5%" }}>
        <CartPageSecondryComponent />
      </Box>
      <Footer />
    </>
  );
};

export default CartPageData;

const CartPageInitialComponent = () => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        padding={"1vmax"}
      >
        <Text fontSize={["3xl", "4xl", "5xl"]} fontWeight={"bold"}>
          Cart Items
        </Text>
      </Box>
    </>
  );
};

const CartPageSecondryComponent = () => {
  return (
    <>
      <Flex
        // justifyContent={"center"}
        // border={"1px solid red "}
        flexDirection={{ base: "column", lg: "row" }}
        gap={["1rem", "1vmax"]}
        justifyContent={"space-around"}
      >
        {/* if statement for rendering another page , after the complettion of handle pyment button */}
        <CartItems />
        <CartPaymentPage />
      </Flex>
    </>
  );
};

const CartItems = () => {
  // console.log(prod.name);
  // btn increamnet decreamnet

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  return (
    <Flex
      rounded={"md"}
      flexWrap={"wrap"}
      flexDirection={"column"}
      gap={"1rem"}
    >
      {cart.map((item, index) => {
        return (
          <Flex
            boxShadow="inset 0 0 0 1px #e9e9eb"
            mx={".75rem"}
            // my={"1"}
            rounded={"md"}
            padding={"1vmax"}
            gap={[".5rem", ".75rem"]}
            key={index}
            flexDirection={["column", "row"]}
            width={{ lg: "3xl" }}
          >
            <Box px={[".15rem"]}>
              <Image
                src={item.image}
                alt={"image"}
                objectFit={"cover"}
                height={"100%"}
                w={"sm"}
                rounded={"md"}
              />
            </Box>
            <Flex
              flexDirection={"column"}
              w="100%"
              gap={[".5rem", ".25rem"]}
              justifyContent={"space-between"}
            >
              {/* title */}
              <Box>
                <Text
                  fontSize={"xl"}
                  fontWeight={"semibold"}
                  _hover={{
                    color: "orange.500",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    onOpen();

                    // for toast closing
                    function close() {
                      toast.closeAll();
                    }
                    toast({
                      // position: "bottom-left",
                      duration: "200000000",
                      isClosable: true,
                      render: () => (
                        <Collapse in={isOpen} animateOpacity>
                          <Modal
                            isCentered
                            isOpen={isOpen}
                            onClose={onClose}
                            size={"2xl"}
                            blockScrollOnMount={false}
                          >
                            <ModalOverlay
                              bg="blackAlpha.200"
                              backdropFilter="blur(.1em)"
                            />
                            <ModalContent>
                              <ModalHeader
                                alignItems={"center"}
                                display="flex"
                                justifyContent={"flex-end"}
                              >
                                <Button onClick={close}>
                                  <CloseIcon />
                                </Button>
                              </ModalHeader>

                              <ModalBody>
                                <Flex
                                  gap={"1rem"}
                                  flexDirection={["column", "row"]}
                                  size={["2xl"]}
                                >
                                  {/* img */}
                                  <Box>
                                    <Image
                                      src={item.image}
                                      alt={item.name}
                                      rounded={"md"}
                                      objectFit={"cover"}
                                      w={["lg", "100%"]}
                                      h={"100%"}
                                    />
                                  </Box>
                                  <Stack
                                    padding={"2"}
                                    // width={["", "xl"]}
                                    border="1px solid lightgrey"
                                    rounded={"md"}
                                  >
                                    {/* title */}
                                    <Box>
                                      <Text fontSize={"3xl"}>{item.name}</Text>
                                    </Box>
                                    {/* price */}
                                    <Box
                                      display={"flex"}
                                      alignItems={"center"}
                                      gap={".25rem"}
                                    >
                                      <Text
                                        textDecoration={"line-through"}
                                        fontSize={"md"}
                                      >
                                        ₹{item.price * 2}
                                      </Text>
                                      <Text fontSize={"xl"} color={"#e97730"}>
                                        ₹{item.price}
                                      </Text>
                                    </Box>
                                    {/* ratings */}
                                    <Box>
                                      <ReactStars
                                        size={20}
                                        value={item.ratings}
                                        edit={false}
                                      />
                                    </Box>
                                    {/* descriptions */}
                                    <Box>
                                      <Text>{item.description}</Text>
                                    </Box>
                                  </Stack>
                                </Flex>
                              </ModalBody>
                              <ModalFooter>
                                {/* <Button onClick={close}></Button> */}
                                {cart.some((data) => data.id === item.id) ? (
                                  <Button
                                    onClick={() => {
                                      dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: item,
                                      });
                                    }}
                                    aria-label="left-arrow"
                                    borderRadius="md"
                                    variant="ghost"
                                    colorScheme="red"
                                  >
                                    Remove from Cart
                                  </Button>
                                ) : (
                                  <Button
                                    onClick={() => {
                                      dispatch({
                                        type: "ADD_TO_CART",
                                        payload: item,
                                      });
                                    }}
                                    aria-label="left-arrow"
                                    borderRadius="md"
                                    variant="ghost"
                                    _hover={{
                                      // opacity: "1",
                                      bg: "orange.500",
                                      color: "white",
                                      display: "block",
                                    }}
                                  >
                                    Add to Cart
                                  </Button>
                                )}
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
                        </Collapse>
                      ),
                    });
                  }}
                >
                  {item.name}
                </Text>
              </Box>
              {/* description */}
              <Box>
                <Text noOfLines={"1"}>{item.description}</Text>
              </Box>
              {/* category */}
              <Box>
                <Text fontSize={"lg"} fontWeight={"thin"} color={"orange.500"}>
                  <Tag
                    size={"md"}
                    color={"orange.500"}
                    rounded={"full"}
                    bg={"transparent"}
                    border={"1px solid"}
                  >
                    {item.category}
                  </Tag>
                </Text>
              </Box>
              {/* price */}
              <Box display={"flex"} gap={".5rem"}>
                <Text>MRP</Text>
                <Text textDecoration={"line-through"}>₹{item.price * 2}</Text>
                <Text fontWeight={"extrabold"}>₹{item.price}</Text>
                <Text color={"orange.500"}>{item.discount}% OFF</Text>
              </Box>
              {/* buttons */}

              <Box
                display={"flex"}
                gap={["4"]}
                alignItems={"center"}
                justifyContent={"space-between"}
                // border={"1px solid"}
              >
                <Button
                  bg={"transparent"}
                  border={"1px solid red"}
                  color={"red"}
                  size={"sm"}
                  padding={"5"}
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item,
                    });
                  }}
                  _hover={{
                    bg: "red",
                    color: "white",
                  }}
                >
                  <Text fontWeight={"light"}>Remove Item</Text>
                </Button>
                <Box display={"flex"} gap={["2", "4"]} alignItems={"center"}>
                  <FormControl display={"flex"} alignItems={"center"}>
                    <FormLabel>Quantity</FormLabel>
                    <Select
                      // placeholder={BtnValue}
                      // value={item.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: item.id,
                            qty: e.target.value,
                          },
                        })
                      }
                    >
                      {[...Array(item.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

const CartPaymentPage = () => {
  const {
    state: { cart },
    // dispatch,
  } = CartState();
  const [Total, setTotal] = useState();
  const [Discount, setDiscount] = useState();

  useEffect(() => {
    return () => {
      setTotal(cart?.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
      setDiscount(
        cart?.reduce(
          (acc, curr) =>
            acc + Math.round(((curr.discount * curr.qty) / curr.price) * 100),
          0
        )
      );
    };
  });

  return (
    <>
      <Box
        // position={"fixed"}
        // right={"10%"}
        boxShadow="inset 0 0 0 1px #e9e9eb"
        rounded={"md"}
        padding={"1vmax"}
        mx={[".75rem", ".75rem"]}
        // my={[".75rem", "0"]}
        width={{ lg: "20vw" }}
      >
        <Flex
          flexDirection={"column"}
          // border={"1px solid red"}
          gap={["1.75rem", "2rem", "3rem"]}
          // h={"100%"}
        >
          <Stack spacing={["3", "5"]}>
            {/* // subtotal */}
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              // w={"100%"}
              px={"4%"}
            >
              <Text fontSize={"lg"}>Sub Total :</Text>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                {cart.length} Items
              </Text>
            </Box>
            {/* Total Mrp */}
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"100%"}
              px={"4%"}
            >
              <Text fontSize={"lg"}>Total MRP</Text>
              <Text fontSize={"lg"} color={"orange.500"}>
                $ {Total}
              </Text>
            </Box>
            {/* discount on mrp */}
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"100%"}
              px={"4%"}
            >
              <Text fontSize={"lg"}>Discount</Text>
              <Text fontSize={"lg"} color={"orange.500"}>
                ${Discount}
              </Text>
            </Box>
            {/* convinience fee */}
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"100%"}
              px={"4%"}
            >
              <Text fontSize={"lg"}>Convinience Fee</Text>
              <Text fontSize={"lg"} color={"orange.500"}>
                Free
              </Text>
            </Box>
            {/* total amount */}
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              w={"100%"}
              px={"4%"}
            >
              <Text fontSize={"lg"}>Total Amount</Text>
              <Text fontSize={"lg"} color={"orange.500"}>
                ${Total - Discount}
              </Text>
            </Box>
            {/* button */}
            <PlaceOrderButton />
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

const PlaceOrderButton = () => {
  const {
    state: { cart },
    // dispatch,
  } = CartState();

  const [Total, setTotal] = useState();
  const [Discount, setDiscount] = useState();
  // to nullify the cart after payment and to render thanking page

  useEffect(() => {
    return () => {
      setTotal(cart?.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
      setDiscount(
        cart?.reduce(
          (acc, curr) =>
            acc + Math.round(((curr.discount * curr.qty) / curr.price) * 100),
          0
        )
      );
    };
  });

  const handleSubmit = () => {
    // console.log("amnt", Math.round(Total - Discount));

    var options = {
      key: "rzp_test_wTCqSHTTXM4TBH",
      key_secret: "P71rNpytQUHQR5x2K4stDTA1",
      amount: Math.round(Total - Discount) * 100,
      name: "shop-with-me",
      description: "Test Transaction",
      image: "https://i.giphy.com/media/fYqVqRIeSMRsDtUXj8/giphy.webp",
      currency: "USD",
      prefill: {
        // name: cart.map((item) => item.firstname + item.lastname),
        name: "jason derulo",
        email: "hoilephp@hi2.in ",
        method: "netbanking",
      },
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      notes: {
        address: cart.map((item) => item.street + item.address),
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <>
      {/* buttons */}
      <Box px={"4%"}>
        <Button
          w={"100%"}
          bg={"orange.500"}
          color={"white"}
          fontWeight={"light"}
          onClick={handleSubmit}
        >
          Place Order
        </Button>
      </Box>
    </>
  );
};
