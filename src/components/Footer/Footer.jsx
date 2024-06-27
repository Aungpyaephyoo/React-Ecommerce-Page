// eslint-disable-next-line no-unused-vars
import React from "react";
import footer from "../../assets/footer.jpg";
import shopFooter from "../../assets/shop1.png";
import { FooterLinks } from "../../constants";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
} from "react-icons/fa6";

const Footer = () => {
  const footerImg = {
    backgroundImage: `url(${footer})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "none",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div style={footerImg} className=" text-white">
      <div data-aos="zoom-in" className=" container">
        <div className=" grid md:grid-cols-3 pb-60 pt-5">
          <div className="py-8 px-4">
            <h1 className=" text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={shopFooter} className=" max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              vel eos soluta minima harum sit earum expedita eligendi facere
              accusantium. Voluptate temporibus corrupti quaerat architecto fuga
              placeat omnis. Eum, ab.
            </p>
          </div>
          <div className=" grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className=" text-xl sm:text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((footerLink, index) => (
                    <li
                      className=" cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={index}
                    >
                      <span className="">{footerLink.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className=" text-xl sm:text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((footerLink, index) => (
                    <li
                      className=" cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={index}
                    >
                      <span className="">{footerLink.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-3">
                <a href="#" className="">
                  <FaInstagram className=" text-3xl" />
                </a>
                <a href="#" className="">
                  <FaFacebook className=" text-3xl" />
                </a>
                <a href="#" className="">
                  <FaLinkedin className=" text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mt-3">
                  <FaLocationArrow />
                  <p className=""> Myawaddy, Kayin State</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobile />
                  <p className=""> +95 9773671796</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
