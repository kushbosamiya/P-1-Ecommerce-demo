import React from "react";
import ProdHeader from "../Component/Header";
import BannerComponent from "../Pages/ProductPage/BannerComponent";
import FullCart from "../Pages/ProductPage/FullCart";

import { motion } from "framer-motion";

const Product = () => {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProdHeader />
      <BannerComponent />
      <FullCart />
    </motion.div>
  );
};

export default Product;
