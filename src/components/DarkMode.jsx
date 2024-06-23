// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import lightTheme from "../assets/logo/dayTheme.png";
import darkTheme from "../assets/logo/darkTheme.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const DarkModeHandle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(setTheme);
  };

  return (
    <div className="relative">
      <img
        src={lightTheme}
        alt="light"
        onClick={DarkModeHandle}
        className={`w-12 cursor-pointer decoration-pink-700 transition-all duration-300 rounded-full absolute right z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={darkTheme}
        alt="dark"
        onClick={DarkModeHandle}
        className={`w-11 cursor-pointer decoration-pink-700 transition-all duration-300 rounded-full ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;
