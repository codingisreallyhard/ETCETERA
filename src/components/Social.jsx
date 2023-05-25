import React from "react";
import "./styles/social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Social() {
  return (
    <>
      {/* <nav class="social">
        <ul>
          <li>
            <a href="https://twitter.com/gian_michelle">
              Twitter <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/">
              Facebook <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="http://dribbble.com/gian_michelle">
              Dribbble <i class="fa fa-dribbble"></i>
            </a>
          </li>
          <li>
            <a href="http://behance.net/gianm">
              Behance <i class="fa fa-behance"></i>
            </a>
          </li>
        </ul>
      </nav> */}
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
        <div class="sticky-icon">
          <a
            href="https://www.instagram.com/alin_tattoo/"
            class="Instagram flex gap-4 max-w-sm bg-black"
          >
            <p>Instagram</p> <FaInstagram className="w-full h-8" />
          </a>
          <a
            href="https://www.facebook.com/ta2alin"
            class="Facebook flex gap-4 bg-black"
          >
            Facebook <FaFacebookF className="w-4/6 h-8" />
          </a>

          {/* <a href="https://twitter.com/login" class="Twitter">
          <i class="fab fa-twitter"> </i> Twitter{" "}
        </a> */}
        </div>
      </motion.div>
    </>
  );
}

export default Social;
