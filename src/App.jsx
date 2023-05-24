import { useContext } from "react";
import styles from "./style";

import Contact from "../src/pages/Contact";

import NavigationBar from "./components/Navbar";

import Test from "./components/Test";

import Gallery from "./components/GalleryComp";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import Navi from "./components/Navbar";
import Add from "./pages/Add";
import { useState } from "react";
import { Navigate } from "react-router-dom/dist";
import Login from "./auth/Login";
import { AuthContext } from "./auth/AuthContext";
import { AnimatePresence } from "framer-motion";
import Services from "./pages/Services";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  console.log(currentUser);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  // const ref = firebase.firestore().collection("Gallery");

  return (
    <div className="bg-black ">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<Login />} />
          <Route
            path="/Add"
            element={
              <RequireAuth>
                <Add />
              </RequireAuth>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
