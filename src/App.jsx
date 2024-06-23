// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { NavBar } from "./components";
import { SlidePage } from "./components/SlidePage";
import { ProductDetail } from "./components/Productspage";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sign",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <NavBar />
      <SlidePage />
      <ProductDetail />
    </>
  );
};

export default App;
