import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Products from "./Pages/Product";
import AcademyPage from "./Pages/AcademyPage";
import ResourcePage from "./Pages/ResourcePage";
import CartPage from "./Pages/ProductPage/CartPage";
import NotFound from "./Component/NotFound";
import { AnimatePresence } from "framer-motion";

const MainRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<HomePage />} />
        <Route path="products" exact element={<Products />} />
        <Route path="academy" exact element={<AcademyPage />} />
        <Route path="resources" exact element={<ResourcePage />} />
        <Route path="cart" exact element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default MainRoutes;
