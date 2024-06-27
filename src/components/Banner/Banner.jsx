// eslint-disable-next-line no-unused-vars
import React from "react";
import Img1 from "../../assets/shop1.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className=" min-h-[550px] flex items-center justify-center py-12 sm:py-0">
      <div className=" container ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
          <div className="" data-aos="zoom-in">
            <img
              src={Img1}
              alt="title"
              className=" max-w-[370px] h-[305px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          <div className=" flex flex-col justify-center gap-3 sm:pt-0">
            <h1 data-aos="fade-up" className=" text-3 sm:text-4xl font-bold">
              Winter Sale up to 50% off
            </h1>
            <p
              data-aos="fade-up"
              className=" text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              harum consequatur error ipsam. Iusto ratione est quidem adipisci,
              soluta
            </p>
            <div className=" flex flex-col gap-2">
              <div data-aos="fade-up" className="  flex items-center gap-4">
                <GrSecure className="text-6xl h-11 w-11 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p className="">Quality Products</p>
              </div>
              <div data-aos="fade-up" className=" flex items-center gap-4">
                <IoFastFood className="text-6xl h-11 w-11 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p className="">Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className=" flex items-center gap-4">
                <GiFoodTruck className="text-6xl h-11 w-11 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p className="">Quality Products</p>
              </div>
              <div data-aos="fade-up" className=" flex items-center gap-4">
                <GiFoodTruck className="text-6xl h-11 w-11 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p className="">Quality Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
