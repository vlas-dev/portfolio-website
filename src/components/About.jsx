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
    <div name="about" className="w-full h-screen bg-[#2f2e46] text-[#ffffff] pt-32">
      <div className="flex flex-col justify-center items-center w-full h-full">
        
        <div className="max-w-[1000px] w-full ">
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ffffff]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
 
          <div>
            <p>
              My work consists of creating ser interfaces using HTML, CSS, and
              JavaScript, and also enhancing and editing multimedia content like
              videos, images, and audio. With this combined skill set, I try to
              bring engaging digital experiences to life.
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] mx-auto p-4 flex flex-col pt-10 w-full h-full">
        <div>
          <p className="text-2xl font-bold pb-5">
            Skills
          </p>
        
        </div>

        <div className="flex pb-8 sm:grid-cols-2 text-center gap-4  font-bold">


          <div className="min-h-32">
            <img className="pt-4 w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>


          <div className="min-h-32">
            <img className="pt-4 w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="min-h-32">
            <img
              className="pt-4 w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JS</p>
          </div>
          <div className="min-h-32">
            <img
              className="pt-4 w-20 mx-auto"
              src={ReactImg}
              alt="React icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="min-h-32">
            <img
              className="pt-4 w-20 mx-auto"
              src={Tailwind}
              alt="Tailwind icon"
            />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="min-h-32">
            <img className="pt-4 w-20 mx-auto" src={Node} alt="Node.js icon" />
            <p className="my-4">Node.js</p>
          </div>
        </div>

        <div>
          
        </div>

        <div className="flex pb-8 sm:grid-cols-2 text-center gap-10  font-bold">
          <div className="min-h-32">
            <img
              className="pt-4 w-20 mx-auto"
              src={Photoshop}
              alt="Photoshop icon"
            />
            <p className="my-4">Photoshop</p>
          </div>
          <div className="min-h-32">
            <img
              className="pt-4 w-20 mx-auto"
              src={Illustrator}
              alt="Illustrator icon"
            />
            <p className="my-4">Illustrator</p>
          </div>
          <div className="min-h-32">
            <img className="pt-4 w-20 mx-auto" src={Vegas} alt="Vegas icon" />
            <p className="my-3">Vegas Pro</p>
          </div>
          <div className="min-h-32">
            <img
              className="pt-4 w-20 mx-auto"
              src={FLStudio}
              alt="FLStudio icon"
            />
            <p className="my-4">FL Studio</p>
          </div>
        </div>
      </div>








      </div>




      




    </div>
  );
};

export default About;
