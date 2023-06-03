import React from "react";
import calculatorImg from "../assets/calculatorImg.jpeg";
import weatherImg from "../assets/weatherImg.jpeg";
import memoryImg from "../assets/memoryImg.jpeg";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      name="/projects"
      className="flex justify-center items-center  pb-20 w-full bg-[#ffffff] dark:bg-[#181a1b]  pt-20 sm:pl-4 sm:pr-4  text-center md:h-screen  transition-colors duration-200"
    >
      <motion.div
        className="w-full max-w-[800px] mx-auto"
        initial={{ opacity: 0, translateX: -3 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 3 }}
        transition={{ duration: 0.3 }}
        style={{ overflowAnchor: "auto" }}
      >
        <div>
          <p className="text-4xl font-bold inline  text-[#444440] dark:text-gray-300">
            Projects
          </p>
        </div>

        {/* CONTAINER */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-10 pr-8 pl-8 md:pr-0 md:pl-0">
          {/* GRID ITEM */}
          <div className="shadow-md shadow-[#040c16] container rounded-md mx-auto transform ease-in-out overflow-hidden flex flex-col">
            <img src={calculatorImg} alt="Calculator" className="w-full h-full " />
            
            <div className="p-3 flex-grow">
              <h2 className="text-2xl font-bold text-[#444440] dark:text-gray-300">
                Calculator
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                A simple calculator built using React and JavaScript. It can perform basic
                mathematical operations.
              </p>
            </div>
 
            <div className="text-center pt-4 pb-4 mb-4">
              <a
                href="https://vlas-dev.github.io/calculator-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 m-2  text-white border-2 border-blue-500 hover:dark:border-white bg-blue-500 hover:bg-white hover:text-gray-700 font-bold text-lg transition-colors duration-200"
              >
                Live
              </a>
              <a
                href="https://github.com/vlas-dev/calculator-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 m-2  text-white border-2 border-blue-500 hover:dark:border-white bg-blue-500 hover:bg-white hover:text-gray-700 font-bold text-lg transition-colors duration-200"
              >
                Code
              </a>
            </div>
          </div>

          {/* GRID ITEM */}
          <div className="shadow-md shadow-[#040c16] container rounded-md mx-auto transform ease-in-out overflow-hidden flex flex-col">
            <img src={weatherImg} alt="Weather App" className="w-full h-full" />
            <div className="p-3 flex-grow">
              <h2 className="text-2xl font-bold text-[#444440] dark:text-gray-300">
                Weather App
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Displays the weather using the OpenWeatherMap API. Supports location-based retrieval.
              </p>
            </div>
            <div className="text-center pt-4 pb-4 mb-4">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 m-2  text-white border-2 border-blue-500 hover:dark:border-white bg-blue-500 hover:bg-white hover:text-gray-700 font-bold text-lg transition-colors duration-200"
              >
                Live
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 m-2  text-white border-2 border-blue-500 hover:dark:border-white bg-blue-500 hover:bg-white hover:text-gray-700 font-bold text-lg transition-colors duration-200"
              >
                Code
              </a>
            </div>
          </div>

          {/* GRID ITEM */}
          <div className="shadow-md shadow-[#040c16] container rounded-md mx-auto transform ease-in-out overflow-hidden flex flex-col">
            <img src={memoryImg} alt="Memory Game" className="w-full h-full " />
            <div className="p-3 flex-grow">
              <h2 className="text-2xl font-bold text-[#444440] dark:text-gray-300">
                Memory Game
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Test your memory skills by remembering the positions and aim for the highest score possible.
              </p>
            </div>
            <div className="text-center pt-4 pb-4 mb-4">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 m-2  text-white border-2 border-blue-500 hover:dark:border-white bg-blue-500 hover:bg-white hover:text-gray-700 font-bold text-lg transition-colors duration-200"
              >
                Live
              </a>
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-4 py-2 m-2  text-white border-2 border-blue-500 hover:dark:border-white bg-blue-500 hover:bg-white hover:text-gray-700 font-bold text-lg transition-colors duration-200"
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
