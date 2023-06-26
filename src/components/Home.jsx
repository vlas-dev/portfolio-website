import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import { motion } from "framer-motion";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div name="/" className="w-full h-screen bg-white dark:bg-[#181a1b]  transition-colors duration-200"
    


      >

      {/* CONTAINER */}
      <motion.div className="max-w-[800px] mx-auto flex flex-col justify-center items-center h-full"
        
        initial={{ opacity: 0, translateX: -3 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 3 }}
    transition={{duration: 0.3 }} 
    style={{ overflowAnchor: "auto" }}
    >
        <div className="flex flex-col justify-center items-center ">
          <h1 className="md:text-6xl text-5xl text-gray-500 dark:text-gray-300 text-center mt-5 pb-5">
            Hi, I'm <span className="font-semibold text-blue-500 dark:text-[#fd204f] ">Fabián</span>{" "}
          </h1>
          <h2 className="md:text-5xl text-3xl font-semibold text-gray-600 dark:text-gray-400 text-center pb-5">
            Front-End Developer
          </h2>
          <p className="max-w-[500px] md:max-w-[600px] text-gray-600 dark:text-gray-400 text-center px-5 md:pr-0 md:pl-0">
          I'm a junior dev specialized in React based in Argentina. <br /> I also have skills in graphic design.          </p>
          <div
            className="relative mt-5"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <Link to="/about">
              <button
                className={`flex items-center focus:outline-none py-2 px-4 border-solid border-2   transition-colors duration-200 ${
                  isHovered ? "bg-white border-gray-600 dark:border-white " : "bg-blue-500 border-blue-500 dark:border-[#fd204f] dark:bg-[#fd204f]"
                }`}
              >
                <span
                  className={`mr-2 ${
                    isHovered ? "text-gray-600 " : "text-white "
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
                    className={
                      isHovered
                        ? "text-gray-600"
                        : "text-white"
                    }
                    style={{ marginTop: "3px" }}
                  />
                </motion.span>
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
