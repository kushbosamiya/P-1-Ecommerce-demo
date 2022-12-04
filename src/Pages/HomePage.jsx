import React from "react";
import Header from "../Component/Header";
import Herocarousel from "../Component/Herocarousel";
import TrendingProd from "../Component/TrendingProd";
import Footer from "../Component/Footer";
import NewsLetter from "../Component/NewsLetter";
import BlogSection from "../Component/BlogComponent";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <motion.div
        intial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <Herocarousel />
        <TrendingProd />
        {/* <Route path="blog/:id" exact element={<BlogSection/>} /> */}
        <BlogSection />
        <NewsLetter />
        <Footer />
      </motion.div>
    </>
  );
};

export default HomePage;
