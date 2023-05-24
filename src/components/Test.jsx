import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import { motion } from "framer-motion";

import "./Test.css";
const featuredProducts = [
  "https://manofmany.com/wp-content/uploads/2019/12/Tattoo.jpg",
  "https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.emeraldcoastmagazine.com/content/uploads/2021/12/k/f/atomic-frog-tattoo-shop-ecm-october-2021-johnharringtonphoto-686-story-ccsz-1024x682.jpg",
];

let count = 0;
let slideInterval;

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Text, setText] = useState(0);
  const slideRef = useRef();

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1450);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  // Framer Motion Code

  //

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 6000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    setText(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    setText(count);
    slideRef.current.classList.add("fade-anim");
  };

  const Desktop = (
    <>
      <div className="aspect-w-16 aspect-h-9 flex justify-center items-center w-screen h-screen desktop ">
        <img src={featuredProducts[currentIndex]} alt="" className="" />
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </>
  );

  const Mobile = (
    <>
      <div className="aspect-w-16 aspect-h-9 flex justify-center items-center w-full">
        <img
          src={featuredProducts[currentIndex]}
          alt=""
          className="w-full h-full testing"
        />
      </div>
      <div className="absolute w-full top-52  transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </>
  );

  return (
    <div ref={slideRef} className="select-none relative w-full h-full">
      <>
        <div className="aspect-w-16 aspect-h-9 flex justify-center items-center ">
          <img
            src={featuredProducts[currentIndex]}
            alt=""
            className="desktop w-screen h-screen"
          />
          {Text ? (
            <motion.div
              className="absolute top-1/4  w-3/4 "
              initial={{ transform: `translateY(200%)`, opacity: 0 }}
              animate={{
                opacity: 1,
                transform: `translateY(-100%)`,
                transition: { duration: 0.4 },
              }}
              exit={{ transform: `translateY(0%)` }}
            >
              <p className=" text-2xl text-white font-poppins text-center textresponsive-first border-y-2  ">
                <h3 className="text-center">My name is</h3>{" "}
                <h2 className="text-5xl text-white text-center amanda">Alin</h2>{" "}
                <span className="blacktext notblack">
                  and this is my portofoli
                </span>
                o, featuring the best work I have ever done and all the memories
                I have collected since I started{" "}
                <span className="blacktext">doing wh</span>at I love the most
                which is making tatoos and sharing my art with the world!
              </p>
            </motion.div>
          ) : (
            <>
              <motion.div
                className="absolute top-1/4  w-3/4 textresponsive-first"
                initial={{ transform: `translateY(-200%)`, opacity: 0 }}
                animate={{
                  opacity: 1,
                  transform: `translateY(200%)`,
                  transition: { duration: 0.4 },
                }}
              >
                <p className=" text-2xl text-white font-poppins text-center textresponsive-second border-y-2 ">
                  <h3 className="text-center">My name is</h3>{" "}
                  <h2 className="text-5xl text-white text-center amanda">
                    Alin
                  </h2>{" "}
                  and this is my portofolio, featuring the best work I have ever
                  done and all the memories I have collected since I started
                  doing what I love the most which is making tatoos and sharing
                  my art with the world!
                </p>
              </motion.div>
            </>
          )}
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <AiOutlineVerticalRight size={30} />
          </button>
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <AiOutlineVerticalLeft size={30} />
          </button>
        </div>
      </>
    </div>
  );
}
