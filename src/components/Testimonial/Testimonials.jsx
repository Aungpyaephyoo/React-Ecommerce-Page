// eslint-disable-next-line no-unused-vars
import React from "react";
import { TestimonialsData } from "../../constants";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className=" container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className=" text-sm text-primary ">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className=" text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className=" text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            error doloremque voluptatem quidem explicabo illo!
          </p>
        </div>
        <div data-aos="zoom-in" className="">
          <Slider {...settings}>
            {TestimonialsData.map((testimonialData, index) => (
              <div className="my-6" key={index}>
                <div className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative ">
                  <div className=" mb-4">
                    <img
                      src={testimonialData.img}
                      alt={testimonialData.name}
                      className=" rounded-full w-20 h-20 "
                    />
                  </div>
                  <div className=" flex flex-col items-center gap-4">
                    <div className=" space-y-3">
                      <p className=" text-xs text-gray-500">
                        {testimonialData.text}
                      </p>
                      <h1 className=" text-xl font-bold text-black/80 dark:text-white">
                        {testimonialData.name}
                      </h1>
                    </div>
                  </div>
                  <p className=" text-black/20 text-9xl font-serif absolute top-0 right-0">
                    &quot;
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
