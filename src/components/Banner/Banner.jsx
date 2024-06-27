// eslint-disable-next-line no-unused-vars
import React from "react";
import Img1 from "../../assets/shop1.png";

const Banner = () => {
  return (
    <div className=" min-h-[550px]  flex items-center justify-center py-12 sm:py-0">
      <div className=" container ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="" data-aos="zoom-in">
            <img
              src={Img1}
              alt="title"
              className=" max-w-[300px] h-[250px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
