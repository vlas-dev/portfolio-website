import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";


const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div name="/" className="w-full h-screen bg-white dark:bg-[#181a1b]">
      {/* CONTAINER */}
      <div className="max-w-[800px] mx-auto flex flex-col md:flex-row justify-center items-center h-full">
        

        <div className="flex flex-col justify-center items-center ">
          <h1 className="lg:text-5xl md:text-3xl text-4xl text-gray-500 dark:text-gray-300 text-center mt-5 pb-5">
            Hi, I'm <span className="font-semibold text-blue-500 ">Fabián</span>{" "}
          </h1>
          <h2 className="lg:text-5xl md:text-3xl text-4xl font-semibold text-gray-600 dark:text-gray-400  pb-5">
            Front-End Developer <br />& Multimedia Editor
          </h2>
          <div
            className="relative mt-5"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <Link to="/about">
              <button
                className={`flex items-center focus:outline-none py-2 px-4 border-solid border-2 border-blue-500 ${
                  isHovered ? "bg-blue-500 " : ""
                }`}
              >
                <span
                  className={`text-gray-600 dark:text-gray-300 mr-2 ${
                    isHovered ? "text-white" : ""
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
                    className={isHovered ? "text-white" : "text-gray-600 dark:text-gray-300"}
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
