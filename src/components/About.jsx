import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import Photoshop from "../assets/photoshop.png";
import Illustrator from "../assets/illustrator.png";
import Premiere from "../assets/premiere.png";
import AfterEffects from "../assets/aftereffects.png";

import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="/about"
      className="flex justify-center items-center min-h-screen bg-[#ffffff] dark:bg-[#181a1b] text-[#444440] dark:text-gray-300 transition-colors duration-200"
    >
      <motion.div
        initial={{ opacity: 0, translateX: -3 }}
        animate={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 3 }}
        transition={{ duration: 0.3 }}
        style={{ overflowAnchor: "auto" }}
      >
        <div className="w-full max-w-[500px] md:max-w-[800px] text-center pt-20">
          <div className="pb-5">
            <p className="text-4xl font-bold inline">About</p>
          </div>
          <div className="sm:grid-cols-2 gap-8 pr-8 pl-8 md:pr-32 md:pl-32 mb-5">
            <p>
            My work consists of creating web apps as well as editing multimedia content. With this combined skill set, I try to bring engaging user experiences to life.
            </p>
          </div>
        </div>

        <div className="w-full p-4 pt-8 mb-10 text-center">
          <div>
            <p className="text-2xl font-bold mb-8">Main Skills</p>
          </div>



          <div className="grid grid-cols-3 justify-center gap-4 font-bold md:flex md:flex-no-wrap max-w-[350px] md:max-w-[500px] mx-auto">  

          <div className="w-24 mx-auto">
              <img className="w-16 mx-auto mb-3" src={HTML} alt="HTML icon" />
              <p>HTML</p>
            </div>

            <div className="w-24 mx-auto">
              <img className="w-16 mx-auto mb-3" src={CSS} alt="CSS icon" />
              <p>CSS</p>
            </div>

            <div className="w-24 mx-auto">
              <img
                className="w-16 mx-auto mb-3"
                src={JavaScript}
                alt="Javascript icon"
              />
              <p>JavaScript</p>
            </div>

            <div className="w-24 mx-auto">
              <img className="w-16 mx-auto mb-3" src={ReactImg} alt="React icon" />
              <p>React</p>
            </div>

            <div className="w-24 mx-auto">
              <img className="w-16 mx-auto mb-3" src={Node} alt="Node icon" />
              <p>Node.js</p>
            </div>

            <div className="w-24 mx-auto">
              <img
                className="w-16 mx-auto mb-3"
                src={Tailwind}
                alt="Tailwind icon"
              />
              <p>Tailwind</p>
            </div>
          </div>





          
        </div>

        <div className="w-full p-4 pt-0 text-center">
          <div>
            <p className="text-2xl font-bold mb-8">Additional Skills</p>
          </div>

          <div className="justify-center gap-4 font-bold flex flex-no-wrap max-w-[350px] md:max-w-[500px] mx-auto">  

          <div className="mx-auto">
              <img className="w-10 md:w-16 mx-auto mb-3" src={Photoshop} alt="Photoshop icon" />
              <p>Photoshop</p>
            </div>

            <div className=" mx-auto">
              <img className="w-10 md:w-16 mx-auto mb-3" src={Illustrator} alt="Illustrator icon" />
              <p>Illustrator</p>
            </div>

            <div className="mx-auto">
              <img
                className="w-10 md:w-16 mx-auto mb-3"
                src={Premiere}
                alt="Premiere icon"
              />
              <p>Premiere</p>
            </div>

            <div className=" mx-auto">
              <img className="w-10 md:w-16 mx-auto mb-3" src={AfterEffects} alt="After Effects icon" />
              <p>After Effects</p>
            </div>

           
          </div>

          
        </div>
      </motion.div>
    </div>
  );
};

export default About;
