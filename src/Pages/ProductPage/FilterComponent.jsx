import React, { useEffect, useState } from "react";
import {
  Divider,
  Text,
  Flex,
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  Stack,
  RadioGroup,
} from "@chakra-ui/react";

// for mobile devices
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

import { CartState } from "../Context/context";
// icons
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { ChevronDownIcon } from "@chakra-ui/icons";
import FilterListIcon from "@mui/icons-material/FilterList";

const FilterCard = () => {
  // let {
  //   state: { products },
  //   productState: { byStock, category },
  // } = CartState();

  return (
    <>
      <Flex
        alignItems={["center"]}
        gap={".5vmax"}
        // border={"1px solid red"}
      >
        <SortComponent />
        <Divider orientation="vertical" />
        <CategoriesComponent
        // setCategory={setCategory}
        // productState={ProductState}
        // activeCategory={activeCategory}
        // setActiveCategory={setActiveCategory}
        />
        <Divider orientation="vertical" />
        <OtherComponent />
      </Flex>
    </>
  );
};

export default FilterCard;

const SortComponent = () => {
  // for sorting only
  const [value, setValue] = React.useState("");

  let {
    productState: { sort },
    productDispatch,
  } = CartState();

  return (
    <>
      {/* display none at small device default */}
      <Box
        my={"4"}
        display={"none"}
        gap={"10vmax"}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text>Filters</Text>
        <Button
          variant={"link"}
          color={"orange.500"}
          fontWeight={"light"}
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear Filters
        </Button>
      </Box>

      <Box my={"4"}>
        <Text fontWeight={"extrabold"} mb={"2"} display={["none"]}>
          Sort
        </Text>
        {/* sort componenet for mobile devices */}
        <Menu>
          <MenuButton
            padding={["0"]}
            variant="ghost"
            mx={["2"]}
            bg={"transparent"}
            as={Button}
            _focus={{ background: "white" }}
            leftIcon={<SwapVertIcon />}
          >
            <Text fontWeight={"light"}>Sort</Text>
          </MenuButton>
          <MenuList pos={["absolute"]} top={["5"]}>
            <MenuItem background={"white"}>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="column" gap={".25rem"}>
                  <Radio
                    value="1"
                    colorScheme="orange"
                    size={"md"}
                    onChange={() =>
                      productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "highToLow",
                      })
                    }
                    checked={sort === "highToLow" ? true : false}
                  >
                    Price High to Low
                  </Radio>
                </Stack>
              </RadioGroup>
            </MenuItem>
            <MenuItem bg={["white"]}>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="column" gap={".25rem"}>
                  <Radio
                    value="2"
                    colorScheme="orange"
                    size={"md"}
                    onChange={() =>
                      productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "lowToHigh",
                      })
                    }
                    checked={sort === "lowToHigh" ? true : false}
                  >
                    Price Low to High
                  </Radio>
                </Stack>
              </RadioGroup>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

const OtherComponent = () => {
  let {
    productState: { byStock },
    productDispatch,
  } = CartState();

  return (
    <>
      <Box my={"4"}>
        <Text fontWeight={"extrabold"} mb={"2"} display={["none"]}>
          Other
        </Text>

        <Menu>
          <MenuButton
            padding={["0"]}
            variant="ghost"
            mx={"1"}
            bg={"transparent"}
            as={Button}
            _focus={{ background: "white" }}
            rightIcon={<FilterListIcon />}
          >
            <Text fontWeight={"light"}>Filters</Text>
          </MenuButton>
          <MenuList bg={"white"} pos={["absolute"]} top={["5"]} right={["-20"]}>
            <MenuItem>
              <Checkbox
                colorScheme="orange"
                color={"orange.500"}
                onChange={() =>
                  productDispatch({
                    type: "FILTER_BY_STOCK",
                  })
                }
                checked={byStock}
              >
                Out of Stock
              </Checkbox>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

const CategoriesComponent = () => {
  const {
    state: { products },
    productState: { category },
    productDispatch,
  } = CartState();

  // for category select

  let CategoryList = [];
  if (products.length > 0) {
    for (let index = 0; index < 5; index++) {
      CategoryList = [...CategoryList, products[index]];
    }
  }

  const [Category, setCategory] = useState([]);
  const [productState, setProductState] = useState([]);
  const [activeCategory, setActiveCategory] = useState(category);

  useEffect(() => {
    setProductState(() => {
      products.map((product) => product);
    });
    setCategory(() => [products.map((item) => item.category)]);
    if (activeCategory === 0) {
      setCategory(productState);
      return;
    }
    const filteredCategory = products.filter((item) =>
      item.category.includes(activeCategory)
    );
    setCategory(filteredCategory);
  }, [activeCategory, setCategory, productState]);

  return (
    <>
      <Box my={"4"}>
        <Text fontWeight={"extrabold"} mb={"2"} display={["none"]}>
          Categories
        </Text>

        {/* category btn for for mobile devices */}
        <Menu>
          <MenuButton
            padding={["0"]}
            mx={"1"}
            variant="ghost"
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bg={"transparent"}
            _focus={{ background: "transparent" }}
          >
            <Text fontWeight={"light"}>Category</Text>
          </MenuButton>
          <MenuList pos={["absolute"]} left={["-10"]} top={["5"]}>
            <MenuItem bg={["white"]}>
              {" "}
              <CheckboxGroup colorScheme="orange" color={"orange.500"}>
                <Stack spacing={[1, 5]} direction={["column", "column"]}>
                  {CategoryList.map((prodcat, prodindex) => {
                    return (
                      <div key={prodindex}>
                        <Checkbox
                          onChange={() => {
                            productDispatch({
                              type: "FILTER_BY_CATEGORY",
                            });
                            setActiveCategory(prodcat.category);
                          }}
                        >
                          {prodcat.category}
                        </Checkbox>
                      </div>
                    );
                  })}
                </Stack>
              </CheckboxGroup>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};
