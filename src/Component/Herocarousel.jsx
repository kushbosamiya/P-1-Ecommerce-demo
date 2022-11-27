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
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

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
  const top = useBreakpointValue({ base: "80%", md: "50%", sm: "85%" });
  const side = useBreakpointValue({ base: "5%", md: "5%" });
  const right = useBreakpointValue({ base: "5%", md: "5%" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Design Projects 1",
      text: "The project board is an exclusive resource for contract work.",
      image:
        "https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Design Projects 2",
      text: "The project board is an exclusive resource for contract work. ",
      image:
        "https://images.pexels.com/photos/301375/pexels-photo-301375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work.",
      image:
        "https://images.pexels.com/photos/5769337/pexels-photo-5769337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  useEffect(() => {
    
  }, []);

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
            {cards.map((card, index) => (
              <Box
                key={Math.random().toString()}
                height={["40vh", "50vh", "50vh", "60vh"]}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize={"cover"}
                backgroundImage={`url(${card.image})`}
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
                    color="#fff"
                    _hover={{ color: "orange", bg: "white" }}
                    onClick={() => slider?.slickPrev()}
                  >
                    <BiLeftArrowAlt />
                  </IconButton>

                  {/* Right Icon */}

                  <IconButton
                    aria-label="right-arrow"
                    color="#fff"
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
                  top={["5%", "5%", "5%", "5%"]}
                  left={["null", "5%", "15%", "15%"]}
                  right={["null", "5%", "15%", "15%"]}
                  transform="translate(0, 5%)"
                  height={["30vh", "35vh", "40vh", "45vh"]}
                  // padd
                  px={["1rem", "1rem"]}
                  // width
                  // border={[
                  //   "1px solid red",
                  //   "1px solid green",
                  //   "1px solid blue",
                  //   "1px solid yellow",
                  // ]}
                >
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    {card.title}
                  </Heading>
                  <Text
                    textAlign={["left"]}
                    fontSize={{ base: "1rem", lg: "lg" }}
                    color="white"
                  >
                    {card.text}
                  </Text>
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
