import React from "react";
import Navbar from "../Navbar";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header-container">
        <h3 className="header__title">header</h3>
      </div>
    </header>
  );
};

export default Header;
