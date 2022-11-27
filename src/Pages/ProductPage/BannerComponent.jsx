import {
  Image,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Stack,
} from "@chakra-ui/react";
// icons
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

// fonts
import "@fontsource/montserrat";
import "@fontsource/poppins";

const BannerComponent = () => {
  return (
    <>
      <Box>
        <Image
          zIndex={"1"}
          src={
            "https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fgradients_11.jpg?width=400&userId=2659c72c-8d1e-4a2c-b5ac-eded7d61b9dc&cache=v2"
          }
          objectFit={"cover"}
          width="100vw"
          height={"sm"}
          alt="banner"
        />
      </Box>
      <Box
        display={{ base: "flex" }}
        justifyContent="center"
        alignItems="center"
      >
        <MessageComponent />
      </Box>
    </>
  );
};
export default BannerComponent;

const MessageComponent = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Box
        py=".5rem"
        width={{
          "2xl": "14rem",
          xl: "13rem",
          lg: "12rem",
          md: "11rem",
          base: "10rem",
        }}
        height={{
          "2xl": "14rem",
          xl: "13rem",
          lg: "12rem",
          md: "11rem",
          base: "10rem",
        }}
        bg={"white"}
        borderRadius="50%"
        pos={"relative"}
        left={{
          "2xl": "container.xl",
          xl: "container.xl",
          lg: "container.lg",
          md: "container.md",
          base: "container.sm",
        }}
        bottom={{
          "2xl": "12rem",
          xl: "11rem",
          lg: "10rem",
          md: "8rem",
          base: "6rem",
        }}
        zIndex={"5"}
      >
        <Stack
          // border="1px solid grey"
          pos={"relative"}
          top={{
            xl: "3.75rem",
            lg: "3.25rem",
            md: "3.25rem",
            base: "1.25rem",
          }}
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          gap=".3rem"
        >
          <Text
            textAlign="center"
            fontFamily={"montserrat"}
            fontWeight={"bold"}
            fontSize={{
              "2xl": "3xl",
              xl: "2xl",
              lg: "2xl",
              md: "xl",
              base: "xl",
            }}
          >
            Products
          </Text>
          <Breadcrumb
            textAlign={"center"}
            spacing="15px"
            separator={
              <ChevronRightIcon
                color="gray.500"
                boxSize={{ xl: "6", lg: "6", base: "5" }}
              />
            }
          >
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => Navigate("/")}>
                <Text
                  fontFamily={"montserrat"}
                  fontWeight={"light"}
                  fontSize={{ "2xl": "xl", xl: "lg", lg: "md", base: "sm" }}
                  _hover={{ color: "orange.500", cursor: "pointer" }}
                >
                  Home
                </Text>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => Navigate("/products")}>
                <Text
                  fontFamily={"montserrat"}
                  fontWeight={"light"}
                  fontSize={{ "2xl": "xl", xl: "lg", lg: "md", base: "sm" }}
                  _hover={{ color: "orange.500", cursor: "pointer" }}
                >
                  Products
                </Text>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Stack>
      </Box>
    </>
  );
};
