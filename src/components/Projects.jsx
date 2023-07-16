import React from "react";
import calculatorImg from "../assets/calculatorImg.jpeg";
import weatherImg from "../assets/weatherImg.jpeg";
import rpsImg from "../assets/rpsImg.jpeg";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      name="/projects"
      className="flex justify-center items-center  pb-20 w-full bg-[#ffffff] dark:bg-[#181a1b] dark:text-gray-300 text-[#444440] pt-20 md:pt-36 sm:pl-4 sm:pr-4  md:h-screen  transition-colors duration-200"
    >
      <motion.div
        className="w-full max-w-[800px] mx-auto"
        initial={{ opacity: 0, translateX: -3 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 3 }}
        transition={{ duration: 0.3 }}
        style={{ overflowAnchor: "auto" }}
      >
        <div className="pb-5 text-center">
          <p className="text-4xl font-bold inline">
            Projects
          </p>
        </div>

        <div className="sm:grid-cols-2 gap-8 pr-8 pl-8 md:pr-32 md:pl-32 mb-2 text-center">
            <p>
              These are some of my latest projects.
            </p>
          </div>

        {/* CONTAINER */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-10 pr-8 pl-8 md:pr-0 md:pl-0">
          {/* GRID ITEM */}
          <div className="shadow-md shadow-[#040c16] dark:border container rounded-md mx-auto transform ease-in-out overflow-hidden flex flex-col text-center">
            <img src={calculatorImg} alt="Calculator" className="w-full h-full " />
            
            <div className="p-3 flex-grow">
              <h2 className="text-2xl font-bold text-[#444440] dark:text-gray-300">
                Calculator
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Simple calculator integrated into a phone interface using CSS. It can perform basic
                mathematical operations.
              </p>
            </div>
 
            <div className=" pt-4 pb-4 mb-4">
              <a
                href="https://vlas-dev.github.io/calculator-app"
                target="_blank"
                rel="noopener noreferrer"
                className=" px-4 py-2 m-2  text-white border-2 border-blue-500 hover:border-gray-600 dark:border-[#fd204f] hover:dark:border-white bg-blue-500 dark:bg-[#fd204f] hover:bg-white hover:dark:bg-white hover:text-gray-600 font-bold text-lg transition-colors duration-200"
              >
                Live
              </a>
              <a
                href="https://github.com/vlas-dev/calculator-app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 m-2  text-white border-2 border-blue-500 hover:border-gray-600 dark:border-[#fd204f] hover:dark:border-white bg-blue-500 dark:bg-[#fd204f] hover:bg-white hover:dark:bg-white hover:text-gray-600 font-bold text-lg transition-colors duration-200"
              >
                Code
              </a>
            </div>
          </div>

          {/* GRID ITEM */}
          <div className="shadow-md shadow-[#040c16] dark:border container rounded-md mx-auto transform ease-in-out overflow-hidden flex flex-col  text-center">
            <img src={weatherImg} alt="Weather App" className="w-full h-full" />
            <div className="p-3 flex-grow">
              <h2 className="text-2xl font-bold text-[#444440] dark:text-gray-300">
                Weather App
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
              Quick tool to check the weather of any city with the OpenWeatherMap API. It uses dynamic AI images.
              </p>
            </div>
            <div className="pt-4 pb-4 mb-4">
              <a
                href="https://vlas-dev.github.io/weather-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 m-2  text-white border-2 border-blue-500 hover:border-gray-600 dark:border-[#fd204f] hover:dark:border-white bg-blue-500 dark:bg-[#fd204f] hover:bg-white hover:dark:bg-white hover:text-gray-600 font-bold text-lg transition-colors duration-200"
              >
                Live
              </a>
              <a
                href="https://github.com/vlas-dev/weather-app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 m-2  text-white border-2 border-blue-500 hover:border-gray-600 dark:border-[#fd204f] hover:dark:border-white bg-blue-500 dark:bg-[#fd204f] hover:bg-white hover:dark:bg-white hover:text-gray-600 font-bold text-lg transition-colors duration-200"
              >
                Code
              </a>
            </div>
          </div>

          {/* GRID ITEM */}
          <div className="shadow-md shadow-[#040c16] dark:border container rounded-md mx-auto transform ease-in-out overflow-hidden flex flex-col text-center ">
            <img src={rpsImg} alt="RPS" className="w-full h-full " />
            <div className="p-3 flex-grow">
              <h2 className="text-2xl font-bold text-[#444440] dark:text-gray-300">
                RPS
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
              Classic Rock Paper Scissors game reimagined as a retro fighting game with custom assets and sprites.              </p>
            </div>
            <div className="pt-4 pb-4 mb-4">
              <a
                href="https://vlas-dev.github.io/RPS-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 m-2  text-white border-2 border-blue-500 hover:border-gray-600 dark:border-[#fd204f] hover:dark:border-white bg-blue-500 dark:bg-[#fd204f] hover:bg-white hover:dark:bg-white hover:text-gray-600 font-bold text-lg transition-colors duration-200"
              >
                Live
              </a>
              <a
                href="https://github.com/vlas-dev/RPS-app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 m-2  text-white border-2 border-blue-500 hover:border-gray-600 dark:border-[#fd204f] hover:dark:border-white bg-blue-500 dark:bg-[#fd204f] hover:bg-white hover:dark:bg-white hover:text-gray-600 font-bold text-lg transition-colors duration-200"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
