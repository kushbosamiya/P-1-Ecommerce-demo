import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Simple() {
  return (
    <Flex
      minH={["20vh", "25vh", "30vh", "35vh"]}
      align={"center"}
      justify={"center"}
      padding={["1rem"]}
      // bg={useColorModeValue("gray.50", "gray.800")}
      mx={{ xl: "10%", lg: "10%", md: "10%" }}
    >
      <Container
        maxW={"lg"}
        bg={useColorModeValue("white", "whiteAlpha.100")}
        boxShadow={"md"}
        rounded={"lg"}
        p={6}
        direction={"column"}
      >
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
        >
          Subscribe to our Newsletter
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"email"}
              type={"email"}
              required
              placeholder={"Your Email"}
              aria-label={"Your Email"}
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button w="100%" colorScheme="orange">
              <CheckIcon />
            </Button>
          </FormControl>
        </Stack>
        <Text mt={2} textAlign={"center"}>
          You won't receive any spam! ✌️
        </Text>
      </Container>
    </Flex>
  );
}
