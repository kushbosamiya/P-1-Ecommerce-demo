import { createContext, useContext, useReducer, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./reducer";





const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(16)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    ratings: faker.helpers.arrayElement([0, 1, 2, 3, 4, 5]),
    category: faker.commerce.productAdjective(5, 30),
    discount: faker.mersenne.rand(80, 10),
    number: faker.phone.number(),
    address: faker.address.streetAddress(),
    street: faker.address.streetName(),
    lastname: faker.name.lastName(),
    firstname: faker.name.firstName(),
    currency: faker.finance.currencySymbol(),
  }));

  const [state, dispatch] = useReducer(
    cartReducer,

    {
      products: products,
      cart: [],
    },
    () => {
      const localData = localStorage.getItem("state");
      return localData
        ? JSON.parse(localData)
        : {
            products: products,
            cart: [],
          };
    }
  );

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    inStock: false,
    category: true,
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
