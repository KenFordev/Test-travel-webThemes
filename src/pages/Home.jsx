import React, { useEffect, useState } from "react";

//Component Imported
import Header from "../components/home/Header";
import Content from "../components/home/Content";

function Home() {
  const [colorTheme, setColorTheme] = useState("");

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");

    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  const handleClick = (e) => {
    setColorTheme(e);
    localStorage.setItem("theme-color", e);
  };

  return (
    <div>
      <Header colorTheme={colorTheme} />
      <div className={`theme-options ${colorTheme}`}>
        <div
          id="theme-blue-white"
          onClick={() => handleClick("theme-blue-white")}
          className={`${colorTheme === "theme-blue-white" ? "active" : ""}`}
        />
        <div
          id="theme-red-black"
          onClick={() => handleClick("theme-red-black")}
          className={`${colorTheme === "theme-red-black" ? "active" : ""}`}
        />
        <div
          id="theme-black-gold"
          onClick={() => handleClick("theme-black-gold")}
          className={`${colorTheme === "theme-black-gold" ? "active" : ""}`}
        />
      </div>
      <Content colorTheme={colorTheme} />
    </div>
  );
}

export default Home;
