import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import "./LayoutComponent.scss";
import "./LayoutComponent-media.scss";

const LayoutComponent = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutComponent;
