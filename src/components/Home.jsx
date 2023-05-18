import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";
import svgHello from "../assets/svgHello.svg";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div name="home" className="w-full h-screen bg-[#ffffff]">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-center items-center h-full">



        

      <div className=" md:order-3 flex justify-center items-center md:flex-col md:justify-start md:items-start lg:max-w-[400px] max-w-[300px] lg:mr-10 ml-10  mr-10 mt-5">
          <img src={svgHello} alt="SVG Image" className="mb-4 md:mb-0" />
        </div>
       

        <div className="flex  flex-col justify-center items-center md:items-start">
          
          <h1 className="lg:text-5xl md:text-3xl text-4xl text-[#5f5b5b]  text-center  mt-5">
            Hi, I'm <span className="font-semibold text-[#344359]">Fabián</span>{" "}
          </h1>
          <h2 className="lg:text-5xl md:text-3xl text-4xl font-semibold text-[#444440]">
            Front-End Developer <br />& Multimedia Editor
          </h2>
          <div
            className="relative mt-5"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <Link to="about" smooth={true} duration={500} >
              <button
                className={`flex items-center focus:outline-none rounded-lg py-2 px-4 ${
                  isHovered ? "bg-[#0e1621]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`text-[#444440] mr-2 font-bold ${
                    isHovered ? "text-white" : ""
                  }`}
                >
                  Read More
                </span>
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: isHovered ? 5 : 0 }}
                  transition={{ yoyo: Infinity, duration: 0.5 }}
                >
                  <FiArrowDown className={isHovered ? "text-white" : ""} />
                </motion.span>
              </button>
            </Link>
          </div>
        </div>

        
        


      </div>
    </div>
  );
};

export default Home;
