import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import Photoshop from "../assets/photoshop.png";
import Illustrator from "../assets/illustrator.png";
import Vegas from "../assets/vegas.png";
import FLStudio from "../assets/flstudio.png";

const About = () => {
  return (
    <div name="about" className="w-full bg-[#001a3f] text-[#ffffff] pt-20 pl-8 sm:pl-4 sm:pr-4 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        
        <div className="w-full max-w-[800px]">
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ffffff]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="w-full max-w-[800px] grid sm:grid-cols-2 gap-8 pl-4">
 
            <p>
              My work consists of creating user interfaces using HTML, CSS, and
              JavaScript, and also enhancing and editing multimedia content like
              videos, images, and audio. With this combined skill set, I try to
              bring engaging digital experiences to life.
            </p>
        </div>

        <div className="w-full max-w-[800px] mx-auto p-4 pt-10">
          <div>
            <p className="text-2xl font-bold pb-5">
              Skills
            </p>
          </div>

          <div className="flex flex-wrap pb-5 sm:grid sm:grid-cols-6 gap-4 font-bold">
            <div className="min-h-32">
              <img className="pt-4 w-20 mx-auto" src={HTML} alt="HTML icon" />
              <p className="my-4 text-center">HTML</p>
            </div>
            <div className="min-h-32">
              <img className="pt-4 w-20 mx-auto" src={CSS} alt="CSS icon" />
              <p className="my-4 text-center">CSS</p>
            </div>
            <div className="min-h-32">
              <img className="pt-4 w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
              <p className="my-4 text-center">JS</p>
            </div>
            <div className="min-h-32">
              <img className="pt-4 w-20 mx-auto" src={ReactImg} alt="React icon" />
              <p className="my-4 text-center">React</p>
            </div>
            <div className="min-h-32">
              <img className="pt-4 w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
              <p className="my-4 text-center">Tailwind</p>
            </div>
            <div className="min-h-32">
              <img className="pt-4 w-20 mx-auto" src={Node} alt="Node.js icon" />
              <p className="my-4 text-center">Node.js</p>
              </div>
          </div>

          <div className="flex flex-wrap pb-5 sm:grid sm:grid-cols-6 gap-4 font-bold">
            <div className="min-h-32">
              <img className="pt-4 w-20 mx-auto" src={Photoshop} alt="Photoshop icon" />
              <p className="my-4 text-center">Photoshop</p>
            </div>
            <div className="min-h-32">
              <img className="pt-4 w-20 mx-auto" src={Illustrator} alt="Illustrator icon" />
              <p className="my-4 text-center">Illustrator</p>
            </div>
            <div className="min-h-32">
              <img className="pt-4 w-20 mx-auto" src={Vegas} alt="Vegas icon" />
              <p className="my-3 text-center">Vegas Pro</p>
            </div>
            <div className="min-h-32">
              <img className="pt-4 w-20 mx-auto" src={FLStudio} alt="FLStudio icon" />
              <p className="my-4 text-center">FL Studio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
