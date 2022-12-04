import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  Tag,
  Button,
} from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/poppins";
import supabase from "../supabase";

import { Link, useParams } from "react-router-dom";
// iconss
import { BsArrowRightShort } from "react-icons/bs";

const BlogSection = () => {
  const { id } = useParams();

  const [Posts, setPosts] = useState([]);

  // const Item = HashnodeData.posts;
  // fetching supabase api for blogs
  async function FetchPosts() {
    let DisplaythreePost = [];
    const { data } = await supabase.from("Blogs").select();

    if (data.length > 0) {
      for (let index = 1; index <= 3; index++) {
        DisplaythreePost = [...DisplaythreePost, data[index]];
        setPosts(DisplaythreePost.reverse((item) => item));
      }
    }
  }
  useEffect(() => {
    FetchPosts();
  }, [1]);

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
        mx={{ xl: "2%", lg: "5%", md: "5%" }}
        display={["flex"]}
        pl={{ xl: "1rem", lg: "1rem" }}
        pr={{ xl: "1rem", lg: "1rem" }}
        flexDirection={["column", "row"]}
        justifyContent={["center", "space-around"]}
        flexWrap={"wrap"}
        padding={["1rem", "1rem"]}
      >
        {Posts.map((data, index) => {
          const { coverImagePhotographer } = data;
          return (
            <Stack
              key={index}
              border="1px solid #E7EBF0"
              maxW={["320px"]}
              rounded={"md"}
              flexWrap={"wrap"}
              p={4}
              rowgap={"1rem"}
              overflow={"hidden"}
              mb={{ mb: "1rem" }}
            >
              <Box
                display={"flex"}
                mb={6}
                maxW={"360px"}
                h={"220px"}
                // pos={"relative"}
              >
                <Image
                  borderRadius="md"
                  src={data.coverImage}
                  layout={"cover"}
                  h="100%"
                  objectFit={"cover"}
                  // maxW={["80%", "100%"]}
                  key={data.slug}
                  width={"100%"}
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
                  fontSize={"xl"}
                  transition="0.3s ease-in-out"
                  _hover={{
                    color: "orange",
                    cursor: "pointer",
                  }}
                >
                  <Link to={`/blog/${data.slug}`}>{data.title}</Link>
                </Heading>
                <Text
                  color={"gray.500"}
                  fontSize={"md"}
                  noOfLines={3}
                  fontFamily="poppins"
                >
                  {data.brief}
                </Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align="center">
                <Avatar size={"sm"} name={coverImagePhotographer} />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text color={"gray.500"}>
                    {data.dateAdded} · {data.readTime}min read
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          );
        })}
        {/* </Box> */}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Link to="blog">
          <Button
            // bg={"#fbe4d6"}
            bg={"none"}
            // variant="outline"
            border={"1px solid orange"}
            color={"black"}
            _hover={{
              color: "white",
              bg: "#e97730",
            }}
            rightIcon={<BsArrowRightShort size={24} />}
          >
            View More
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default BlogSection;
