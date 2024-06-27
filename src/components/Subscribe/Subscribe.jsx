// eslint-disable-next-line no-unused-vars
import React from "react";
import BannerImg from "../../assets/banner.png";

const Subscribe = () => {
  const bannerImg = {
    backgroundImage: `url(${BannerImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      data-aos="zoom-in"
      className=" mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={bannerImg}
    >
      <div className=" container backdrop-blur-sm py-10">
        <div className=" space-y-6 max-w-xl mx-auto">
          <h1 className=" text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="ade-up"
            type="text"
            className=" w-full p-3 rounded-lg text-black dark:text-white  focus-visible:outline-none"
            placeholder="Enter your Email"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
