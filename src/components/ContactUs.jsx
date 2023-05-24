import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../components/ctstyles.css";
import Navi from "./Navbar";
import "./styles/stylescontact.css";
import GoogleMapReact from "google-map-react";
import "../components/styles/contact.css";
import { Alert } from "@mui/material";
import { motion } from "framer-motion";
import InitialTransition from "./PageTransition";
import "../index.css";
const ContactUs = () => {
  const form = useRef();
  const [successModal, setModal] = useState(false);

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_dixrelq",
        "template_lsf5g9e",
        form.current,
        "ez1uK6OZ-LyrLMkkd"
      )
      .then(e.preventDefault())
      .then(setModal(true))
      .then(() => {
        setTimeout(setModal(false), 6000);
      });
    // .then(() => {
    //   setTimeout(navigate("/"), 7000);
    // });
  };

  const blackBox = {
    initial: {
      height: "100vh",
    },
    animate: {
      height: 0,
      bottom: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
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

  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 0.8,
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

          <text
            className="text-7xl font-bold chicano"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            Contact
          </text>
        </motion.svg>
      </motion.div>
      <div>
        {successModal ? (
          <motion.div
            exit={{ opacity: 0, y: 50 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.2 },
            }}
          >
            <Alert severity="success" className="bg-black">
              <span className="font-poppins text-lg text-gray-100">
                Message sent successfully!
              </span>
            </Alert>
          </motion.div>
        ) : (
          ""
        )}
      </div>
      {/* <motion.div
        exit={{ opacity: 0, y: -50 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
      > */}
      <div className="w-full h-96 z-0 overflow-hidden">
        <img
          src="https://manofmany.com/wp-content/uploads/2019/12/Tattoo.jpg"
          className="w-full h-full object-cover -rotate-6 -translate-y-16 -translate-x-4"
        />
      </div>
      <div className="h-full">
        <div>
          <section className="text-center max-w-2xl w-11/12 m-auto -mt-40 relative text-white rounded-md p-4 shadow-lg mb-80">
            <form ref={form} onSubmit={sendEmail} className="-mt-64 ">
              <h2 className=" text-white text-5xl classic">Contact</h2>
              <label className=" text-zinc-300 ">Name</label>
              <input
                type="text"
                name="user_name"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              />
              <label className="font-poppins">Email</label>

              <input
                required
                type="email"
                name="user_email"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              />

              <label className="font-poppins">Phone Number</label>

              <input
                required
                type="text"
                name="phone"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              />

              <label className="font-poppins text-zinc-300">Message</label>
              <textarea
                required
                name="message"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              />

              <input
                type="submit"
                value="Send"
                required
                className="contact-button-input  text-center"
              />
            </form>
          </section>
          <section className="flex justify-center items-center mt-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174.33700796804362!2d25.59208952802731!3d45.642946518013744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b7ba4dce223%3A0x2fc94873feb00dce!2sFlash%20Art%20Studio!5e0!3m2!1sro!2sro!4v1676718408889!5m2!1sro!2sro"
              width="600"
              height="450"
              style={{ border: 0, margin: 40 }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>
      </div>
      {/* </motion.div> */}
    </>
  );
};

export default ContactUs;
