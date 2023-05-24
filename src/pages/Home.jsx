import React from "react";
import styles from "../style";

import HomeNav from "../components/HomeNav";
import Test from "../components/Test";
import HomeGallery from "../components/HomeGallery";
import Social from "../components/Social";
import Responsive from "../components/Responsive";

import GalleryNavi from "../components/GalleryNav";
import { motion } from "framer-motion";

function Home() {
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <motion.div
      className="relative z-50 w-full bg-black"
      exit={{ opacity: 0, y: -50 }}
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 2 },
      }}
    >
      <div>
        <GalleryNavi />
        <Social />
      </div>

      <div>
        {" "}
        <Test />
      </div>

      <div className="bg-black responsiveDesktop">
        <HomeGallery />
      </div>
    </motion.div>
  );
}

export default Home;
