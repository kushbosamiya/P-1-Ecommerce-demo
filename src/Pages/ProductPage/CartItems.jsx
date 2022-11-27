import React from "react";
// contextApi
import { CartState } from "../Context/context";
import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Flex,
  Collapse,
} from "@chakra-ui/react";

// icons
import { Eye } from "@styled-icons/feather/Eye";
import { CloseIcon } from "@chakra-ui/icons";

// star component
import ReactStars from "react-rating-stars-component";

const CartItems = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  // console.log(products);
  const toast = useToast();
  // const toastIdRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        padding="1%"
        my="2%"
        mx="2%"
        // pos={'absolute'}
        border="1px solid lightgrey"
        borderRadius={"md"}
        // w={"80vw"}
        overflow="hidden"
        boxShadow="base"
      >
        <Box>
          <Image
            src={prod.image}
            height={230}
            width={["xs"]}
            rounded={"md"}
            objectFit={"cover"}
            transform="scale(1.0)"
            _hover={{
              transform: "scale(1.05)",
              transition: "0.3s ease-in-out",
            }}
            zIndex="2"
          />
          <Stack pt={5} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {prod.category}
            </Text>
            <Heading fontSize={"xl"} fontWeight={500}>
              {prod.name}
            </Heading>
            <Stack display="flex" direction={"row"}>
              <Box display={"flex"} alignItems="center" gap="2">
                <Text fontWeight={800} fontSize={"xl"}>
                  ${prod.price}
                </Text>
                <Text textDecoration={"line-through"} color={"gray.600"}>
                  ${prod.price * 2}
                </Text>
              </Box>
              {cart.some((data) => data.id === prod.id) ? (
                <Button
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    });
                  }}
                  aria-label="left-arrow"
                  borderRadius="md"
                  variant="ghost"
                  colorScheme="red"
                >
                  <Text fontWeight={"light"}> Remove from Cart</Text>
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: prod,
                    });
                  }}
                  aria-label="left-arrow"
                  borderRadius="md"
                  bg={"transparent"}
                  color={"orange.500"}
                  border={"1px solid"}
                  _hover={{
                    // opacity: "1",
                    bg: "orange.500",
                    color: "white",
                    display: "block",
                  }}
                  disabled={!prod.inStock}
                >
                  <Text fontWeight={"light"}>
                    {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                  </Text>
                </Button>
              )}
            </Stack>
            <Box pos={"relative"} display="flex" left={"15%"} bottom={"250"}>
              <Button
                opacity="0"
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
                          size={"3xl"}
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
                                    src={prod.image}
                                    alt={prod.name}
                                    rounded={"md"}
                                    w={["lg", "100%"]}
                                    h={"100%"}
                                  />
                                </Box>
                                <Stack
                                  padding={"2"}
                                  width={"xl"}
                                  border="1px solid lightgrey"
                                  rounded={"md"}
                                >
                                  {/* title */}
                                  <Box>
                                    <Text fontSize={"3xl"}>{prod.name}</Text>
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
                                      ${prod.price * 2}
                                    </Text>
                                    <Text fontSize={"xl"} color={"#e97730"}>
                                      ${prod.price}
                                    </Text>
                                  </Box>
                                  {/* ratings */}
                                  <Box>
                                    <ReactStars
                                      size={20}
                                      value={prod.ratings}
                                      edit={false}
                                    />
                                  </Box>
                                  {/* descriptions */}
                                  <Box>
                                    <Text>{prod.description}</Text>
                                  </Box>
                                </Stack>
                              </Flex>
                            </ModalBody>
                            <ModalFooter>
                              {/* <Button onClick={close}></Button> */}
                              {cart.some((data) => data.id === prod.id) ? (
                                <Button
                                  onClick={() => {
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: prod,
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
                                      payload: prod,
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
                pos={"absolute"}
                right={"5"}
                aria-label="left-arrow"
                borderRadius="md"
                variant="ghost"
                _hover={{
                  opacity: "1",
                  color: "white",
                  bg: "orange.500",
                  display: "block",
                }}
              >
                <Eye size={24} />
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default CartItems;
