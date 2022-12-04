import React from "react";
import {
  Box,
  Text,
  Stack,
  useColorMode,
  Image,
  HStack,
  Button,
  useDisclosure,
  Select,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

// context api
import { CartState } from "../Pages/Context/context";

// icons
import { BiMenu } from "react-icons/bi";

import Bag from "../Assets/Bag.png";
import User from "../Assets/User.png";
import Logo from "../Assets/5S-/5S-Logo-Design.png";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

// fonts
import "@fontsource/montserrat";
import "@fontsource/poppins";

// drawer
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function Navbar(props) {
  // eslint-disable-next-line
  const { colorMode, toggleColorMode } = useColorMode();
  const [SetOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!SetOpen);

  return (
    <>
      <NavBarContainer
        {...props}
        bg={colorMode === "light" ? "bodyBackground" : ""}
      >
        <LogoComponent />
        <MenuLinks SetOpen={SetOpen} />
        <MenuToggle toggle={toggle} SetOpen={SetOpen} />
      </NavBarContainer>
    </>
  );
}

const LogoComponent = () => {
  let navigate = useNavigate();
  return (
    <Box
      display="inline-flex"
      justifyContent={["center", "flex-start"]}
      alignItems={["center"]}
      width={{ base: "40%", md: "100%   " }}
      onClick={() => navigate("/")}
    >
      <Image
        src={Logo}
        alt="logo"
        width={["100%", "60%", "100%"]}
        objectFit={"cover"}
      />
    </Box>
  );
};

const MenuToggle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box
        display={["flex"]}
        alignItems={["center"]}
        justifyContent={{ base: "flex-end" }}
      >
        <IconComponent />
        <Box display={{ base: "block", md: "none" }}>
          <Box pl={[".35rem"]} ref={btnRef} onClick={onOpen}>
            <Button variant="outline">
              <BiMenu size={30} />
            </Button>
          </Box>

          <Drawer
            display={{ md: "none", lg: "none", xl: "none" }}
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            h={["100vh"]}
          >
            <DrawerOverlay />

            <DrawerContent
              display={["flex"]}
              flexDirection={["column"]}
              gap={["1rem"]}
              justifyContent={["space-between"]}
            >
              <DrawerCloseButton />

              <DrawerHeader
                h={["25%"]}
                fontWeight="500"
                display={["flex "]}
                flexDirection={["column"]}
                fontSize="1.25rem"
                px={["1.5rem"]}
                py={["2rem"]}
              >
                Default Welcome Msg!{" "}
              </DrawerHeader>

              <DrawerBody h={["50%"]}>
                <MenuLinks isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
              </DrawerBody>

              <DrawerFooter
                display={["flex"]}
                gap={["1rem"]}
                alignSelf={["flex-start"]}
                width="100%"
                px={["1rem"]}
                py={["1rem"]}
                h={["25%"]}
              >
                <DrawerFooterButton />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

const DrawerFooterButton = () => {
  return (
    <>
      <Select
        width={["50%"]}
        placeholder="$ USD"
        border="none"
        textAlign="center"
        bg="none"
      >
        <option>₹ Rupee</option>
      </Select>{" "}
      <Select
        width={["50%"]}
        placeholder="ENGLISH"
        // border="1px solid"
        border="none"
        textAlign="center"
        bg="none"
      >
        <option>GUJARATI</option>
      </Select>
    </>
  );
};

const MenuLinks = ({ isOpen, onOpen, onClose }) => {
  let navigate = useNavigate();

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexDirection={["column"]}
    >
      <Stack
        fontWeight="500"
        spacing={8}
        gap={["1.5rem"]}
        align={["center", "center", "center", "center"]}
        justify={["center", "space-around", "space-around", "space-around"] }
        direction={["column", "row", "row", "row"]}
      >
        <Box display={["flex"]} alignItems={["center"]}>
          <Text
            display="block"
            _hover={{ color: "orange.500", cursor: "pointer" }}
            fontWeight="500"
            textAlign={["center"]}
            onClick={() => navigate("/")}
          >
            Home
          </Text>

          <Box display={{ md: "none" }}>
            <ChevronRightIcon />
          </Box>
        </Box>
        <Box display={["flex"]} alignItems={["center"]}>
          {/* <Link to="products"> */}
          <Text
            display="block"
            _hover={{ color: "orange.500", cursor: "pointer" }}
            fontWeight="500"
            textAlign={["center"]}
            onClick={() => navigate("/products")}
          >
            Shop Now
          </Text>
          {/* </Link> */}
          <Box display={{ md: "none" }}>
            <ChevronRightIcon />
          </Box>
        </Box>

        {/* <Box display={["flex"]} alignItems={["center"]}>
          <Text
            display="block"
            _hover={{ color: "orange.500", cursor: "pointer" }}
            fontWeight="500"
            textAlign={["center"]}
            onClick={() => navigate("/academy")}
          >
            
            Academy
          </Text>

          <Box display={{ md: "none" }}>
            <ChevronRightIcon />
          </Box>
        </Box> */}

        {/* <Box display={["flex"]} alignItems={["center"]}>
          <Text
            display="block"
            _hover={{ color: "orange.500", cursor: "pointer" }}
            fontWeight="500"
            textAlign={["center"]}
            onClick={() => navigate("/resources")}
          >
            Resources
          </Text>

          <Box display={{ md: "none" }}>
            <ChevronRightIcon />
          </Box>
        </Box> */}
      </Stack>
    </Box>
  );
};

const IconComponent = () => {
  const {
    state: { cart },
  } = CartState();
  let navigate = useNavigate();
  return (
    <>
      <HStack
        pos={["relative"]}
        right={["5%"]}
        justifyContent={["space-between", "center", "center", "center"]}
        _hover={{ cursor: "pointer" }}
        spacing={"5"}
      >
        {/* <Box display={"flex"}> */}
        {/* </Box> */}
        <Avatar
          src={Bag}
          bg={"transparent"}
          size={"sm"}
          onClick={() => {
            navigate("/cart");
          }}
        >
          <AvatarBadge boxSize="2em" bg="orange.500" color={"white"}>
            {cart.length}
          </AvatarBadge>
        </Avatar>

        <Avatar src={User} bg={"transparent"} size={"sm"} />
        {/* <Image src={User} height={"sm"} width="100%" /> */}
      </HStack>
    </>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Box
      display={["flex", "flex", "grid", "grid"]}
      as="nav"
      justifyContent={["space-between", "space-between", "space-between"]}
      alignItems={["center", "center", "center", "center"]}
      // w="100vw"
      columnGap={{ md: "2rem", lg: "1.5rem", xl: ".5rem" }}
      px={["3%", "1.5%", "1.6%", "1.8%"]}
      py={["2%", "1.5%", "1.6%", "1.8%"]}
      gridTemplateColumns={["null", "null", ".5fr 2fr .5fr", ".5fr 2fr .5fr"]}
      fontFamily="montserrat"
      {...props}
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
    >
      {children}
    </Box>
  );
};

export default Navbar;
