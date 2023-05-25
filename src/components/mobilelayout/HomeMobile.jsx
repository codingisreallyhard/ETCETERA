import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import "./Test.css";
const featuredProducts = [
  "https://manofmany.com/wp-content/uploads/2019/12/Tattoo.jpg",
  "https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.emeraldcoastmagazine.com/content/uploads/2021/12/k/f/atomic-frog-tattoo-shop-ecm-october-2021-johnharringtonphoto-686-story-ccsz-1024x682.jpg",
  "https://scontent.fsbz3-1.fna.fbcdn.net/v/t39.30808-6/277560363_965289010838354_2725913621858625290_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=dunE5MsVZD4AX9dKVTv&tn=bx708BL9iOrivjnq&_nc_ht=scontent.fsbz3-1.fna&oh=00_AfBQnsPG0ZTWS_Mz82KFH2-j12E1Fgavp9E45Kbimo3s3g&oe=63E47DE0",
];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstState, setFirstState] = useState("");
  const [secondState, setSecondState] = useState("");
  const [thirdState, setThirdState] = useState("");

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

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

  const slideCounter = "";

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
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div
      ref={slideRef}
      className="w-full select-none relative h-full testing-another"
    >
      <div className="aspect-w-16 aspect-h-9 flex justify-center items-center w-full  ">
        <img
          src={featuredProducts[currentIndex]}
          alt=""
          className="w-full  testing"
        />
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
    </div>
  );
}
