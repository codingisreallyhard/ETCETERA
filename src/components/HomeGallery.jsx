import GalleryNav from "./GalleryNav";
import { useState, React, useEffect } from "react";
import "./HomeGallery.css";
import "../index.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function GalleryComp() {
  const [showMore, setShowMore] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visibleLeft");
      controls.start("visibleMiddle");
      controls.start("visibleRight");
      controls.start("visibleMiddleTwo");
      controls.start("lastPhotosAnimate");
    }
  }, [controls, inView]);

  const firstImageAnimation = {
    leftInitial: {
      x: -200,
      opacity: 0,
    },
    middleInitial: {
      opacity: 0,
      y: -400,
    },
    middleInitialTwo: {
      opacity: 0,
      y: 400,
    },
    rightInitial: {
      x: 200,
      opacity: 0,
    },
    visibleLeft: {
      x: 5,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    visibleMiddle: {
      opacity: 1,
      y: 200,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    visibleMiddleTwo: {
      opacity: 1,
      y: 200,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    visibleRight: {
      y: -20,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const secondImageAnimation = {
    lastPhotosInitial: {
      opacity: 0,
    },
    lastPhotosAnimate: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <>
      <div className="mt-40 border-t-4 border-slate-400">
        <span className="flex justify-center align-middle text-gray-400 mt-20">
          <h2 className="font-poppins text-20xl  cool">Gallery</h2>
        </span>
        <span className="flex justify-center align-middle ml-7 mr-7">
          <p className="font-popins text-gray-100 tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            rem cupiditate placeat at cum temporibus velit quidem odio non
            aliquam ex, dolorem, nam doloribus dicta.
          </p>
        </span>
      </div>
      <div className="relative mt-24 responsive-desktop border-t-4 border-slate-400">
        <div className="  home-gallery-grid ml-16 mr-16 gap-11 ">
          <motion.div
            ref={ref}
            animate={controls}
            initial="leftInitial"
            variants={firstImageAnimation}
          >
            <img
              alt=""
              src="https://manofmany.com/wp-content/uploads/2019/12/40-Tattoo-Ideas-for-Men-Skull-Tattoo.jpg"
            />
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="middleInitial"
            variants={firstImageAnimation}
          >
            <img
              alt=""
              src="https://manofmany.com/wp-content/uploads/2019/12/40-Tattoo-Ideas-for-Men-Religious-Tattoo.jpg"
            />
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="rightInitial"
            variants={firstImageAnimation}
          >
            <img
              alt=""
              src="https://manofmany.com/wp-content/uploads/2019/12/40-Tattoo-Ideas-for-Men-Money-Tattoo.jpg"
            />
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="leftInitial"
            variants={firstImageAnimation}
          >
            <img
              alt=""
              src="https://manofmany.com/wp-content/uploads/2019/12/40-Tattoo-Ideas-for-Men-Angel-Wing-Tattoos.jpg"
            />
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="middleInitialTwo"
            variants={firstImageAnimation}
          >
            <img
              alt=""
              src="https://manofmany.com/wp-content/uploads/2019/12/40-Tattoo-Ideas-for-Men-Crown-Tattoo.jpg"
            />
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="rightInitial"
            variants={firstImageAnimation}
          >
            <img
              alt=""
              src="https://manofmany.com/wp-content/uploads/2019/12/40-Tattoo-Ideas-for-Men-Car-Tattoo.jpg"
            />
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="lastPhotosInitial"
            variants={secondImageAnimation}
          >
            <img
              alt=""
              src="https://manofmany.com/wp-content/uploads/2020/06/Best-Tattoo-Ideas-for-Men-family-Tattoo.jpg"
              className=" opacity-image-1 mt-52"
            />
          </motion.div>

          <motion.a
            href="/Gallery"
            className="bn15"
            ref={ref}
            animate={controls}
            initial="lastPhotosInitial"
            variants={secondImageAnimation}
          >
            Show more
          </motion.a>

          <motion.div
            ref={ref}
            animate={controls}
            initial="lastPhotosInitial"
            variants={secondImageAnimation}
          >
            <img
              alt=""
              src="https://manofmany.com/wp-content/uploads/2019/12/40-Tattoo-Ideas-for-Men-Scorpion-Tattoo.jpg"
              className="opacity-image-2 mt-52"
            />
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="lastPhotosInitial"
            variants={secondImageAnimation}
          >
            <img
              alt=""
              src="https://manofmany.com/wp-content/uploads/2019/12/40-Tattoo-Ideas-for-Men-Meaningful-Tattoo.jpg"
              className=" opacity-image-3 mt-52"
            />
          </motion.div>
          {/* <img alt="" src="" />
      <img alt="" src="" /> */}
        </div>
      </div>
    </>
  );
}

export default GalleryComp;
