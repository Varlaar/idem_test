import React, { useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "./Navbar.module.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="content">
      <ul className={nav ? [style.menu, style.active].join(" ") : [style.menu]}>
        <Link className="navbar__link" to="/">
          Главная
        </Link>
        <Link className="navbar__link" to="/chat">
          Чат
        </Link>
      </ul>
      <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </div>
  );
};

export default Navbar;
