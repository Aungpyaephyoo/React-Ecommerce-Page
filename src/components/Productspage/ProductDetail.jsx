// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaStar } from "react-icons/fa";
import { ProductData } from "../../constants";

const ProductDetail = () => {
  return (
    <div className=" mt-14 mb-12">
      <div className=" container ">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className=" text-sm text-primary ">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className=" text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className=" text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            error doloremque voluptatem quidem explicabo illo!
          </p>
        </div>
      </div>
      <div>
        <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-3">
          {ProductData.map((data, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className=" space-y-3"
              key={index}
            >
              <img
                src={data.img}
                alt={data.title}
                className=" h-[220px] 2-[150px] rounded-md object-cover"
              />
              <div>
                <h3 className=" font-semibold ">{data.title}</h3>
                <p className=" text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />{" "}
                  <span className="">{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex justify-center">
          <button
            data-aos="fade-up"
            className=" text-center mt-10 cursor-pointer bg-primary text-white py-1 px-2 rounded-md"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
