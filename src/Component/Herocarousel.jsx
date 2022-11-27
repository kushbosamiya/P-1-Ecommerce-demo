import React, { useEffect } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// context Api
import { CartState } from "../Pages/Context/context";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Herocarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(<Slider />);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "84%", md: "50%", sm: "85%" });
  const side = useBreakpointValue({ base: "5%", md: "5%" });
  const right = useBreakpointValue({ base: "5%", md: "5%" });

  const {
    state: { products },
  } = CartState();

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  let ShowcaseProduct = [];
  const Item = products;
  if (Item.length > 0) {
    for (let index = 0; index < 4; index++) {
      ShowcaseProduct = [...ShowcaseProduct, Item[index]];
    }
  }

  return (
    <>
      <Box
        display={["grid", "grid", "grid", "grid"]}
        gridTemplateColumns={[
          "1fr",
          ".5fr 4fr .5fr",
          ".5fr 4fr .5fr",
          ".5fr 4fr .5fr",
        ]}
      >
        <Box
          gridColumn="2/3"
          position={"relative"}
          height={["40vh", "50vh", "50vh", "60vh"]}
          overflow={"hidden"}
        >
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {ShowcaseProduct.map((card, index) => (
              <Box
                border={"1px solid"}
                key={Math.random().toString()}
                height={["40vh", "50vh", "50vh", "60vh"]}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize={"cover"}
                backgroundImage={`url(${card.image})`}
                bgSize={["50%", "40%", "30%"]}
              >
                <HStack
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pos={"absolute"}
                  left={side}
                  top={top}
                  right={right}
                >
                  {/* Left Icon */}
                  <IconButton
                    aria-label="left-arrow"
                    borderRadius="md"
                    zIndex={2}
                    variant="ghost"
                    color="orange"
                    _hover={{ color: "orange", bg: "white" }}
                    onClick={() => slider?.slickPrev()}
                  >
                    <BiLeftArrowAlt />
                  </IconButton>

                  {/* Right Icon */}

                  <IconButton
                    aria-label="right-arrow"
                    color="orange"
                    borderRadius="md"
                    zIndex={2}
                    variant="ghost"
                    // transform={"translate(0%, 50%)"}
                    onClick={() => slider?.slickNext()}
                    _hover={{ color: "orange", bg: "white" }}
                  >
                    <BiRightArrowAlt />
                  </IconButton>
                </HStack>

                <Stack
                  display="flex"
                  flexDirection="column"
                  gap={[".5rem"]}
                  justifyContent={["center", "center", "center", "center"]}
                  alignItems="center"
                  position="absolute"
                  border={"1px solid red"}
                  top={["60%", "5%", "50%", "5%"]}
                  left={["null", "5%", "15%", "15%"]}
                  right={["null", "5%", "15%", "15%"]}
                  transform="translate(0, 5%)"
                  width={"100%"}
                  height={["10vh", "20vh", "20vh", "20vh"]}
                  // padd
                  px={["1rem", "1rem"]}
                >
                  <Heading
                    fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
                    noOfLines={["1"]}
                  >
                    {card.title}
                  </Heading>
                </Stack>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
}

export default Herocarousel;
