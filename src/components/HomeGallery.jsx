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
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-cedf6.appspot.com/o/images%2FWhatsApp%20Image%202023-05-24%20at%2018.21.24%20(4).jpeg?alt=media&token=a6ee44df-d6b3-4ba1-9c3d-b8cc58b38624"
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
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-cedf6.appspot.com/o/images%2FWhatsApp%20Image%202023-05-24%20at%2018.21.23%20(4).jpeg?alt=media&token=d4efa8e6-5e67-4ad7-b4fd-505957f69986"
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
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-cedf6.appspot.com/o/images%2FWhatsApp%20Image%202023-05-24%20at%2018.21.25%20(3).jpeg?alt=media&token=732bcc4e-74c3-4489-b977-afafa755f6b9"
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
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-cedf6.appspot.com/o/images%2FWhatsApp%20Image%202023-05-24%20at%2018.21.24%20(1).jpeg?alt=media&token=e171f84c-0425-479c-9362-3809d5c8ad6e"
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
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-cedf6.appspot.com/o/images%2FWhatsApp%20Image%202023-05-24%20at%2018.21.25%20(4).jpeg?alt=media&token=880627c0-cb09-4923-b97c-af124920e197"
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
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-cedf6.appspot.com/o/images%2FWhatsApp%20Image%202023-05-24%20at%2017.33.35%20(4).jpeg?alt=media&token=18e9a481-3563-42b4-b2d9-f7756cbb18bb"
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
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-cedf6.appspot.com/o/images%2FWhatsApp%20Image%202023-05-24%20at%2017.33.35%20(4).jpeg?alt=media&token=18e9a481-3563-42b4-b2d9-f7756cbb18bb"
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
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-cedf6.appspot.com/o/images%2FWhatsApp%20Image%202023-05-24%20at%2018.21.23%20(4).jpeg?alt=media&token=d4efa8e6-5e67-4ad7-b4fd-505957f69986"
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
              src="https://firebasestorage.googleapis.com/v0/b/auth-development-cedf6.appspot.com/o/images%2FWhatsApp%20Image%202023-05-24%20at%2018.21.23%20(4).jpeg?alt=media&token=d4efa8e6-5e67-4ad7-b4fd-505957f69986"
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
