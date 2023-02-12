import React from "react";

import "./Header.css";
//Components Imported
import Navbar from "./navbar/Navbar";

function Header({ colorTheme }) {
  return (
    <div className={`header-bg ${colorTheme}`}>
      <div className="container">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
