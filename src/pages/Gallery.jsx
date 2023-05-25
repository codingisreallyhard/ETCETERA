import React from "react";
import GalleryComp from "../components/GalleryComp";
import { motion } from "framer-motion";
import AppTest from "../components/GalleryCompTesting";
import Social from "../components/Social";
function Gallery() {
  return (
    <>
      <GalleryComp />
      <Social />
    </>
  );
}

export default Gallery;
