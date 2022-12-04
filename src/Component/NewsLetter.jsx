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

// import supabse
import supabase from "../supabase";
import { useState } from "react";

// import uuid
import { v4 as uuidv4 } from "uuid";

export default function Simple() {
  const [title, setTitle] = useState("");
  const [formError, setFormError] = useState(null);
  const [Id, setId] = useState("");
  const [CurrentTimeZone, setCurrentTimeZone] = useState("");
  let CurrentDate = new Date();
  let Timezone =
    CurrentDate.getDate() +
    "-" +
    CurrentDate.getMonth() +
    "-" +
    CurrentDate.getFullYear() +
    "  /  " +
    CurrentDate.getHours() +
    ":" +
    CurrentDate.getMinutes() +
    ":" +
    CurrentDate.getSeconds();

  async function PushMail(e) {
    e.preventDefault();
    if (!title) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("email-data")
      .insert([{ Id, title, CurrentTimeZone }]);

    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }
    if (data) {
      console.log(data);
      setFormError(null);
    }
  }

  return (
    <Flex
      minH={["20vh", "25vh", "30vh", "35vh"]}
      align={"center"}
      justify={"center"}
      padding={["1rem"]}
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
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setId(uuidv4());
                setCurrentTimeZone(Timezone);
                // console.log(typeof title + Id + Timezone);
              }}
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button w="100%" colorScheme="orange" onClick={PushMail}>
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
