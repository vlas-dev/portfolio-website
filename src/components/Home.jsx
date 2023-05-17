import React from "react";
import { Link } from "react-scroll";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import svgHello from "../assets/svgHello.svg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#ffffff]">
      {/* CONTAINER */}
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-center items-center h-full">
        <div className="flex justify-center items-center md:order-2 md:flex-col md:justify-start md:items-start max-w-[450px] lg:mr-10 ml-10  mr-10">
          <img src={svgHello} alt="SVG Image" className="mb-4 md:mb-0" />
        </div>
        <div className="md:order-1 flex flex-col justify-center items-center md:items-start max-w-[500px] md:ml-10 lg:ml-10">
          <h1 className="text-4xl sm:text-5xl lg:text-[69px] text-[#5f5b5b] max-w-[400px] text-center md:text-left mt-5">
            Hi, I'm <span className="font-bold text-[#2f2e41]">Fabián</span>{" "}
          </h1>
          <h2 className="text-3xl sm:text-3xl font-bold text-[#444440] max-w-[500px] md:mt-4 text-center md:text-left">
            Front-End Developer <br />& Multimedia Editor
          </h2>
          <div className="max-w-[200px] mt-6">
            <Link to="about" smooth={true} duration={500}>
              <motion.button
            
                className="rounded-lg bg-[#2f2e41] text-white py-2 px-6 flex items-center justify-center hover:bg-[#0f0f0f] hover:shadow-lg"
              >
                <span className="mr-2 p-1">Read More</span>
                <motion.span
                  animate={{ y: 7 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    repeatType: "mirror",
                  }}
                  className="p-1"
                >
                  <FiArrowRight
                    size={20}
                    style={{ transform: "rotate(90deg)" }}
                  />
                </motion.span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
