import { createContext, useContext, useReducer, useEffect } from "react";

import { cartReducer, productReducer } from "./reducer";

import ProductsInfo from "../ProductPage/product.json";

const Cart = createContext();

const Context = ({ children }) => {
  // console.log(ProductsInfo);
  const products = ProductsInfo;

  const [state, dispatch] = useReducer(
    cartReducer,

    {
      products: products,
      cart: [],
    },
    // () => {
    //   const localData = localStorage.getItem("state");
    //   return localData
        // ? JSON.parse(localData)
    //     : {
    //         products: products,
    //         cart: [],
    //       };
    // }
  );

  useEffect(() => {
    // localStorage.setItem("state", JSON.stringify(state));
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    inStock: false,
    category: true,
  });

  // console.log(productState);

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
