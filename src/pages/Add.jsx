import React from "react";
import { useState, useEffect } from "react";
import storage from "../database/firebase";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import Navi from "../components/Navbar";
import GalleryNavi from "../components/GalleryNav";
import { Alert } from "@mui/material";
import "../components/styles/galleryadd.css";

function Add() {
  const [imageUpload, setImageUpload] = useState("");
  const [imageList, setImageList] = useState([]);
  const [allImages, setImages] = useState([]);
  const [success, setSuccess] = useState(false);
  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(setSuccess(true));
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  function deleteImage(imageUrl) {
    const imageRef = ref(storage, imageUrl);
    deleteObject(imageRef)
      .then(() => {
        // Remove the deleted image from the imageList state
        setImageList((prev) => prev.filter((item) => item !== imageUrl));
      })
      .catch((error) => {
        console.log("Error deleting image: ", error);
      });
  }

  return (
    <>
      <>
        <GalleryNavi />
      </>

      {success && (
        <div className="bg-transparent absolute left-14 responsive-upload ">
          <Alert severity="success" className="bg-transparent ">
            <span className="text-lg text-slate-300">Uploaded!</span>
          </Alert>
        </div>
      )}

      <div className="w-4/5 h-4/5 flex flex-row  text-white justify-center items-center ">
        <div className="bg-slate-500 mt-44">
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
            className="font-poppins"
            required
          />
          <br />
          <button
            onClick={uploadImage}
            className=" font-poppins p-6 bg-orange-600 mt-4 flex items-center justify-center"
          >
            Upload{" "}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-72 mobile-responsive">
        {imageList.map((image) => {
          return (
            <div
              key={image}
              className="image max-h-12 max-w-md gap-20 flex flex-col mt-60 mb-80 "
            >
              <img src={image} alt="" className="bg-cover" />
              <button
                onClick={() => deleteImage(image)}
                className="font-poppins p-6 bg-orange-600 mt-24  flex items-center justify-center "
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Add;
