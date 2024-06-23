// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick/lib/slider";
import { ImageLists } from "../../constants";

const SlidePage = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className=" relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className=" h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageLists.map((imageList, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className=" flex flex-col justify-center text-center gap-4 pt-12 sm:pt-0 sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className=" text-4xl  sm:text-6xl lg:text-7xl font-bold"
                  >
                    {imageList.title}
                  </h1>
                  <p
                    data-aos="zoom-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className=" text-sm"
                  >
                    {imageList.description}
                  </p>
                  <div
                    data-aos="zoom-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className=" bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>
                <div className=" order1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={imageList.img}
                      alt={imageList.title}
                      className=" w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlidePage;
