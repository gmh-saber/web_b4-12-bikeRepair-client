import React from "react";
import { motion } from "framer-motion";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container h">
      {/* <NavBar />
      <br />
       */}
      <Banner />
    </header>
  );
};

export default Header;
