import React from "react";

import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { Eye } from "@styled-icons/feather/Eye";
import "@fontsource/montserrat";
import "@fontsource/poppins";

// context Api
import { CartState } from "../Pages/Context/context";

function ProdContainerItem() {
  const {
    state: { products },
  } = CartState();

  const { isOpen, onOpen, onClose } = useDisclosure();

  let ShowcaseProduct = [];

  const Item = products;
  if (Item.length > 0) {
    for (let index = 0; index < 6; index++) {
      ShowcaseProduct = [...ShowcaseProduct, Item[index]];
    }
    // console.log(ShowcaseProduct);
  }
  const toast = useToast();

  return (
    <>
      <Box
        style={{
          overflowX: "hidden",
        }}
        display={{ xl: "grid", lg: "grid", md: "flex", sm: "flex" }}
        flexWrap="wrap"
        gridTemplateColumns={{
          xl: ".5fr .5fr .5fr",
          lg: ".5fr .5fr .5fr",
          md: ".5fr .5fr .5fr",
        }}
        justifyContent={{
          xl: "space-between",
          lg: "space-between",
          md: "space-around",
          sm: "space-around",
        }}
        gap=".75em"
        mx={{ xl: "10%", lg: "10%", md: "10%" }}
        px={{ xl: "4%", lg: "4%", md: "4%" }}
        p={["1rem"]}
      >
        {ShowcaseProduct.map(function ({
          id,
          title,
          image,
          description,
          price,
        }) {
          return (
            <Box key={id}>
              <Box
                role={"group"}
                maxW={{ xl: "300px", lg: "280px", md: "260px", sm: "240px" }}
                height={"340px"}
                // rounded={"md"}
                overflow={"hidden"}
                // border="1px solid lightgrey"
                zIndex={1}
                mb={["1rem"]}
              >
                <Box
                  overflow={"hidden"}
                  h={"250px"}
                  w={"100%"}
                  // bg={"gray.100"}
                  pos={"relative"}
                  display={"inline-flex"}
                  justifyContent={"center"}
                >
                  <Button
                    display="none"
                    pos={"absolute"}
                    aria-label="left-arrow"
                    left={"40%"}
                    top={"40%"}
                    transform={"translate(0%, 50%)"}
                    borderRadius="md"
                    zIndex={2}
                    variant="ghost"
                    color="#fff"
                    onClick={() => {
                      onOpen();
                      function close() {
                        toast.closeAll();
                      }
                      toast({
                        position: "bottom-left",
                        duration: "200000000",
                        isClosable: true,
                        render: () => (
                          <Modal isCentered isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay
                              bg="blackAlpha.200"
                              backdropFilter="blur(.5em)"
                              fontFamily="montserrat"
                            />
                            <ModalContent>
                              <ModalHeader>
                                <Box>
                                  <Image
                                    margin={"0 auto"}
                                    src={image}
                                    objectFit={"cover"}
                                    alt={title}
                                    width={"50%"}
                                  />
                                </Box>
                              </ModalHeader>

                              <ModalBody>
                                <Text
                                  fontSize={"2xl"}
                                  fontWeight={"bold"}
                                  fontFamily="montserrat"
                                >
                                  {title}
                                </Text>

                                <Text py="5" fontFamily="poppins">
                                  {description}
                                </Text>
                              </ModalBody>
                              <ModalFooter>
                                <Button onClick={close}>Close</Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
                        ),
                      });
                    }}
                    _groupHover={{
                      color: "white",
                      bg: "orange.500",
                      display: "block",
                    }}
                  >
                    <Eye size={24} />
                  </Button>

                  <Image
                    transform="scale(1.0)"
                    // rounded={"md"}
                    width={"80%"}
                    objectFit={"contain"}
                    src={image}
                    _hover={{
                      transform: "scale(1.02)",
                      transition: "0.3s ease-in-out",
                    }}
                  />
                </Box>
                <Stack p="2">
                  <Text
                    color={"gray.500"}
                    fontSize={"sm"}
                    textAlign="center"
                    textTransform={"uppercase"}
                    fontFamily="montserrat"
                    noOfLines={"2"}
                  >
                    {title}
                  </Text>
                  <Stack
                    direction={"row"}
                    align={"center"}
                    fontFamily="poppins"
                    justifyContent="center"
                  >
                    <Text fontWeight={800} fontSize={"xl"}>
                      ₹{price}
                    </Text>
                    <Text textDecoration={"line-through"} color={"gray.600"}>
                      ₹{price * 2}
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

const ProdContainerHeader = () => {
  return (
    <>
      <Box
        // px="1.5rem"
        py="1.5%"
        mx={{ base: "10%" }}
        display="flex"
        justifyContent={["center", "flex-start", "flex-start", "flex-start"]}
      >
        <Heading
          fontSize={["1.5rem", "1.75rem"]}
          fontWeight={["500", "600"]}
          as="h2"
          color="#2c2c2c"
        >
          <Box display={["inline-block"]}>Hot Products</Box>
          <Box
            borderBottom="2px solid #e97730"
            py={["1"]}
            pos={["relative"]}
            w={["70%", "60%"]}
            left={["4", "4"]}
            right={["4", "4"]}
          ></Box>
        </Heading>
      </Box>
    </>
  );
};

function TrendingProduct(props) {
  // eslint-disable-next-line

  return (
    <>
      <ProdContainer {...props}>
        <ProdContainerHeader />
        <ProdContainerItem />
      </ProdContainer>
    </>
  );
}

const ProdContainer = ({ children, ...props }) => {
  return <Box w="100vw">{children}</Box>;
};

export default TrendingProduct;
