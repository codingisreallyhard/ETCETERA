import React from "react";
import ContactUs from "../components/ContactUs";
import "../components/styles/stylescontact.css";
import Social from "../components/Social";
import GalleryNavi from "../components/GalleryNav";

function Contact() {
  return (
    <>
      <GalleryNavi />
      <div className=" bg-black">
        <ContactUs />
        <Social />
      </div>
    </>
  );
}

export default Contact;
