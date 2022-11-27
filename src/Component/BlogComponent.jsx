import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  Tag,
} from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/poppins";
import HashnodeData from "../Data/hashnode.json";

const BlogSection = () => {
  const Item = HashnodeData.posts;
  let DisplaythreePost = [];
  if (Item.length > 0) {
    for (let index = 0; index < 3; index++) {
      DisplaythreePost = [...DisplaythreePost, Item[index]];
    }
  }

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
          <Box display={["inline-block"]}>Blogs & Article</Box>
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
      <Box
        mx={{ xl: "10%", lg: "10%", md: "10%" }}
        display={{ sm: "flex", md: "grid" }}
        pl={{ xl: "1rem", lg: "1rem" }}
        pr={{ xl: "1rem", lg: "1rem" }}
        flexDirection={{ sm: "column" }}
        gridTemplateColumns={{
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        // justifyContent={'space-between'}
        padding={["1rem", "1rem"]}
        // mx={{ xl: "10%", lg: "10%", md: "10%" }}
        gap={10}
      >
        {DisplaythreePost.map((data, index) => (
          <Stack
            key={data.id}
            border="1px solid #E7EBF0"
            rounded={"md"}
            p={4}
            overflow={"hidden"}
            mb={["1rem", "1rem"]}
          >
            <Box
              h={"220px"}
              bg={"gray.100"}
              // mt={-6}
              // mx={-6}
              mb={6}
              // pos={"relative"}
            >
              <Image
                borderRadius="md"
                src={data.coverImage}
                layout={"cover"}
                h="100%"
                w="100%"
                key={data.slug}
                transition="0.3s ease-in-out"
              />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                fontFamily="montserrat"
                letterSpacing={1.1}
              >
                <Tag>{data.tags}</Tag>
              </Text>
              <Heading
                fontSize={"2xl"}
                transition="0.3s ease-in-out"
                _hover={{
                  color: "orange",
                  cursor: "pointer",
                }}
              >
                {data.title}
              </Heading>
              <Text color={"gray.500"} noOfLines={4} fontFamily="poppins">
                {data.brief}
              </Text>
            </Stack>
            <Stack
              mt={6}
              direction={"row"}
              spacing={4}
              align="center"
            >
              <Avatar name="Vaishali Parekh" alt={"Author"} />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>Vaishali Parekh</Text>
                <Text color={"gray.500"}>
                  {data.dateAdded} · {data.readTime}min read
                </Text>
              </Stack>
            </Stack>
          </Stack>
        ))}
        {/* </Box> */}
      </Box>
    </>
  );
};

export default BlogSection;
