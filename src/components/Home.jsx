import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import svgHello from "../assets/svgHello.svg";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div name="/" className="w-full h-screen bg-[#ffffff]">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-center items-center h-full">



        

      <div className=" md:order-3 flex justify-center items-center md:flex-col md:justify-start md:items-start lg:max-w-[400px] max-w-[300px] lg:mr-10 ml-10  mr-10 mt-5">
          <img src={svgHello} alt="SVG Image" className="mb-4 md:mb-0" />
        </div>
       

        <div className="flex  flex-col justify-center items-center md:items-start">
          
          <h1 className="lg:text-5xl md:text-3xl text-4xl text-[#5f5b5b]  text-center  mt-5">
            Hi, I'm <span className="font-semibold text-[#335384]">Fabián</span>{" "}
          </h1>
          <h2 className="lg:text-5xl md:text-3xl text-4xl font-semibold text-[#444440]">
            Front-End Developer <br />& Multimedia Editor
          </h2>
          <div
            className="relative mt-5"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <Link to="/about" >
              <button
                className={`flex items-center focus:outline-none  py-2 px-4 border-solid border-2 border-[#001a3f]  ${
                  isHovered ? "bg-[#001a3f]" : ""
                }`}
              >
                <span
                  className={`text-[#444440] mr-2 font-semibold  ${
                    isHovered ? "text-white" : " "
                  }`}
                >
                  Read More
                </span>
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ yoyo: Infinity, duration: 0.5 }}
                >
                    <FiArrowRight
    className={isHovered ? "text-white" : ""}
    style={{ marginTop: "3px" }}
  />
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
