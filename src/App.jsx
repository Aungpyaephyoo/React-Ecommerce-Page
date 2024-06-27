// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { NavBar } from "./components";
import { SlidePage } from "./components/SlidePage";
import { ProductDetail } from "./components/Productspage";
import AOS from "aos";
import "aos/dist/aos.css";
import { TopRateProducts } from "./components/TopRateProducts";
import { Banner } from "./components/Banner";
import { Subscribe } from "./components/Subscribe";
import { Testimonials } from "./components/Testimonial";
import { Footer } from "./components/Footer";

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
    <div className=" bg-white dark:bg-gray-900 dark:text-white duration-200">
      <NavBar />
      <SlidePage />
      <ProductDetail />
      <TopRateProducts />
      <Banner />
      <Subscribe />
      <ProductDetail />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
