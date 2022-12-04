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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/poppins";
import supabase from "../supabase";
// styles
import "../Component/RenderThreePost.css";

// default components
import Header from "../Component/Header";
import Footer from "../Component/Footer";

import { Link } from "react-router-dom";

// icons
import { TbExternalLink } from "react-icons/tb";

const BlogsPage = () => {
  return (
    <>
      <Header />
      <SeveralBlogs />
      <Footer />
    </>
  );
};

const SeveralBlogs = () => {
  const [Posts, setPosts] = useState([]);

  // const Item = HashnodeData.posts;
  // fetching supabase api for blogs
  async function FetchPosts() {
    let DisplaythreePost = [];
    const { data } = await supabase.from("Blogs").select();

    if (data.length > 0) {
      for (let index = 1; index <= 14; index++) {
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
      <Grid
        templateColumns={{ md: "repeat(auto-fill, minmax(200px, 1fr)" }}
        justifyContent={"center"}
      >
        <GridItem
          gridColumn={["none", "1/2"]}
          mx={{ md: "10%", lg: "20%" }}
          // border={"1px solid lightgrey"}
          // borderRadius={'md'}
          my={{ md: "1%" }}
        >
          <Box
            paddingX={".5rem"}
            display={["flex"]}
            flexDirection={["column", "row"]}
            justifyContent={["space-around"]}
            flexWrap={"wrap"}
            gap={".5rem"}
          >
            {Posts.map((item, index) => {
              const {
                coverImage,
                title,
                dateAdded,
                readTime,
                coverImagePhotographer,
                content,
                tags,
                slug,
              } = item;
              return (
                <Flex
                  gridColumn={"1/2"}
                  paddingX={".25rem"}
                  key={index}
                  border="1px solid lightgrey"
                  borderRadius={"md"}
                  my={[".5rem"]}
                  flexDirection={["column"]}
                  maxW={["280px"]}
                >
                  {/* 1st sub component */}
                  <Box
                    display={["flex"]}
                    justifyContent={["space-between"]}
                    w={["100%"]}
                    my={[".5rem"]}
                  >
                    {/* avatar */}
                    <Box>
                      <Avatar size={["sm"]} name={coverImagePhotographer} />
                    </Box>
                    {/* read more article */}
                    <Box>
                      <Link to={`/blog/${slug}`}>
                        <Button
                          size={["sm"]}
                          rightIcon={<TbExternalLink />}
                          // bg={"#fbe4d6"}
                          bg={"none"}
                          // variant="outline"
                          border={"1px solid orange"}
                          color={"black"}
                          _hover={{
                            color: "white",
                            bg: "#e97730",
                          }}
                        >
                          Read article
                        </Button>
                      </Link>
                    </Box>
                  </Box>

                  {/* 2nd component */}
                  <Box my={[".5rem"]}>
                    <Text fontWeight={["extrabold"]}>{title}</Text>
                  </Box>

                  {/* 3rd component */}
                  <Box>
                    <Text
                      fontWeight={["light"]}
                      fontSize={"xs"}
                      alignItems={"center"}
                    >
                      {dateAdded} • &nbsp;{readTime} mins • &nbsp;
                      <Tag
                        borderRadius={"full"}
                        border={"1px solid #e97730 "}
                        bg={"none"}
                        size={"sm"}
                      >
                        {tags}
                      </Tag>
                    </Text>
                  </Box>
                  {/* 4th componenet */}
                  <Box my={[".5rem"]} maxW={"320px"} h={"100%"}>
                    <Image
                      src={coverImage}
                      boxSize={"100%"}
                      objectFit={"cover"}
                      borderRadius={"md"}
                    />
                  </Box>
                </Flex>
              );
            })}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default BlogsPage;

// {Posts.map((item, index) => {
//   const {
//     coverImage,
//     title,
//     dateAdded,
//     readTime,
//     coverImagePhotographer,
//     content,
//     tags,
//   } = item;
