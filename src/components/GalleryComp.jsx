import GalleryNavi from "./GalleryNav";
import { useState, React, useEffect } from "react";
import storage from "../database/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { motion } from "framer-motion";
import "../index.css";
import styles from "./styles/gallerystyles.module.css";
import tat from "../assets/tat.png";
import Social from "./Social";
import "../fonts/ChicanosPersonalUseRegular-qZDw5.ttf";
import Image from "../assets/rotated.png";
function GalleryComp() {
  const [imageList, setImageList] = useState([]);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const blackBox = {
    initial: {
      height: "100vh",
    },
    animate: {
      height: 0,
      bottom: 0,
      transition: {
        when: "afterChildren",
        duration: 1.75,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.25,
        when: "afterChildren",
      },
    },
  };

  const svgContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <>
      <motion.div
        className="absolute z-50 flex items-center justify-center w-full bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <motion.div variants={svgContainer} className="absolute z-50 flex">
          <rect className="w-full h-full fill-current" />
          <motion.rect
            variants={text}
            className="w-full h-full text-gray-600 fill-current"
          />
          <img
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2a0KPvqMxOLGH2rkZu_rLxsWJf6Jnq35Kw&usqp=CAU"
            src={Image}
            alt="tattoo"
            className="text-white -translate-y-12 animate-animatetattoo w-96 h-96"
          ></img>
        </motion.div>
        <motion.svg variants={textContainer} className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-gray-600 fill-current"
            />
          </pattern>
          {/* <text
            className="text-4xl  chicano"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            Gallery
          </text> */}
        </motion.svg>
      </motion.div>
      <div className="bg-white">
        <GalleryNavi />
        <Social />
      </div>
      <h2 className="text-white  text-center pt-12 text-5xl classic mb-16">
        Gallery
      </h2>
      <div className="grid grid-rows-3 bg-black">
        {/* Loop through the image list */}

        {imageList.map((url, index) => {
          if (index % 5 === 0) {
            return (
              <div className={styles.container}>
                {imageList.slice(index, index + 5).map((url) => {
                  return (
                    <div className={styles.card}>
                      <img src={url} />
                    </div>
                  );
                })}
              </div>
            );
          }
        })}
      </div>
      {/* </motion.div> */}
    </>
  );
}

export default GalleryComp;
