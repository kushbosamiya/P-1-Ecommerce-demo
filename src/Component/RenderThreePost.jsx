import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  HStack,
  Avatar,
  Image,
  Tag,
  Button,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/poppins";
import supabase from "../supabase";
// style
// import "../Component/RenderThreePost.css";

import { Link, useParams } from "react-router-dom";

// default imports are mention below
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const RenderThreePost = () => {
  // styles
  const BorderRadiusForImg = {
    borderRadius: ".25rem",
  };

  const { id } = useParams();

  const [Posts, setPosts] = useState([]);
  const [singlePosts, setsinglePosts] = useState([]);

  // fetching supabase api for blogs
  async function FetchPosts() {
    let DisplaythreePost = [];
    const { data } = await supabase.from("Blogs").select();

    if (data.length > 0) {
      for (let index = 1; index <= 10; index++) {
        DisplaythreePost = [...DisplaythreePost, data[index]];
        setPosts(DisplaythreePost.reverse((item) => item));
      }

      let blog = DisplaythreePost.find((blog) => blog.slug === id);
      if (blog) {
        console.log("this is new :", blog);
        setsinglePosts(blog);
      }
    }
  }
  const {
    coverImage,
    title,
    dateAdded,
    readTime,
    coverImagePhotographer,
    content,
    tags,
  } = singlePosts;
  useEffect(() => {
    FetchPosts();
  }, [1]);

  return (
    <>
      <Header />
      <Grid
        style={BorderRadiusForImg}
        templateColumns={["none", ".25fr 1fr .25fr"]}
      >
        <GridItem
          maxW={"992px"}
          gridColumn={"2/3"}
          border={{ md: "1px solid lightgrey" }}
          borderRadius={"md"}
          my={".25rem"}
        >
          <Flex flexDirection={"column"}>
            {/* coverimage */}
            <Box
              my={[".5rem"]}
              padding={[".25rem"]}
              display={"flex"}
              justifyContent={"center"}
            >
              <Image
                src={coverImage}
                // borderRadius={"md"}
                maxH={{ md: "380px" }}
                maxW={{ md: "100%" }}
              />
            </Box>

            {/* title */}
            <Box
              my={[".5rem"]}
              padding={[".25rem"]}
              display={"flex"}
              justifyContent={"center"}
            >
              <Heading fontSize={["lg"]}>{title}</Heading>
            </Box>

            {/* Hstack for credits */}
            <HStack
              my={[".5rem"]}
              padding={[".25rem"]}
              display={"flex"}
              justifyContent={"center"}
            >
              <Box
                maxW={"480px"}
                border={"1px solid lightgrey"}
                borderRadius={"md"}
                display={["flex"]}
                alignItems={["center"]}
                justifyContent={["space-around"]}
                width={["100%"]}
                padding={[".25rem"]}
              >
                {/* coverimage */}
                <Box>
                  <Avatar name={coverImagePhotographer} size={["sm"]} />
                </Box>
                <Box display={["none", "block"]}>
                  <Text>{coverImagePhotographer}</Text>
                </Box>
                <Box>
                  <Text fontSize={["lg"]}>•</Text>
                </Box>
                <Box>
                  <Text fontSize={["sm"]}>{dateAdded}</Text>
                </Box>
                <Box>
                  <Text fontSize={["lg"]}>•</Text>
                </Box>
                <Box>
                  <Text fontSize={["sm"]}>{readTime} min</Text>
                </Box>
                <Box>
                  <Tag
                    borderRadius={"full"}
                    border={"1px solid #e97730 "}
                    bg={"none"}
                  >
                    {tags}
                  </Tag>
                </Box>
              </Box>
            </HStack>

            {/* content */}
            <Stack my={[".5rem"]} padding={[".25rem"]}>
              <Text
                px={["5%"]}
                dangerouslySetInnerHTML={{ __html: content }}
                css={{
                  "&:first-letter": {
                    color: "#e97730",
                    fontSize: "2em",
                  },
                }}
              />
            </Stack>
          </Flex>
        </GridItem>
      </Grid>

      <Footer />
    </>
  );
};

export default RenderThreePost;
