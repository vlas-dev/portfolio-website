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


const About = () => {
  return (
    <div name="/about" className="w-full bg-[#ffffff] text-[#444440] pt-20 sm:pl-4 sm:pr-4  text-center h-screen">
      <div className="w-full max-w-[800px] mx-auto ">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#335384]">
            About
          </p>
        </div>
        <div className="max-w-[600px] sm:grid-cols-2 gap-8 mx-auto">
          <p>
            My work consists of creating user interfaces using HTML, CSS, and
            JavaScript, and also enhancing and editing multimedia content like
            videos, images, and audio. With this combined skill set, I try to
            bring engaging digital experiences to life.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[800px] mx-auto p-4 pt-5 text-center">
  <div>
    <p className="text-2xl font-bold pb-3">Programming Skills</p>
  </div>

  <div className="flex justify-center"> {/* Added flex justify-center */}
    <div className="flex flex-nowrap gap-4 font-bold">
      <div className="min-h-32">
        <img className="pt-4 w-20 mx-auto" src={HTML} alt="HTML icon" />
        <p className="my-4 text-center">HTML</p>
      </div>
      <div className="min-h-32">
        <img className="pt-4 w-20 mx-auto" src={CSS} alt="CSS icon" />
        <p className="my-4 text-center">CSS</p>
      </div>
      <div className="min-h-32">
        <img
          className="pt-4 w-20 mx-auto"
          src={JavaScript}
          alt="JavaScript icon"
        />
        <p className="my-4 text-center">JS</p>
      </div>
      <div className="min-h-32">
        <img
          className="pt-4 w-20 mx-auto"
          src={ReactImg}
          alt="React icon"
        />
        <p className="my-4 text-center">React</p>
      </div>

      <div className="min-h-32">
        <img className="pt-4 w-20 mx-auto" src={Node} alt="Node.js icon" />
        <p className="my-4 text-center">Node.js</p>
      </div>
      <div className="min-h-32">
        <img
          className="pt-4 w-20 mx-auto"
          src={Tailwind}
          alt="Tailwind icon"
        />
        <p className="my-4 text-center">Tailwind</p>
      </div>
      
    </div>
  </div>
</div>



<div className="w-full max-w-[800px] mx-auto p-4 pt-0 text-center">
  <div>
    <p className="text-2xl font-bold pb-3">Editing Skills</p>
  </div>

  <div className="flex justify-center"> {/* Added flex justify-center */}
    <div className="flex flex-nowrap gap-4 font-bold">
      <div className="min-h-32">
        <img className="pt-4 w-20 mx-auto " src={Photoshop} alt="Photoshop icon" />
        <p className="my-4 text-center">Photoshop</p>
      </div>
      <div className="min-h-32">
        <img className="pt-4 w-20 mx-auto" src={Illustrator} alt="Illustrator icon" />
        <p className="my-4 text-center">Illustrator</p>
      </div>
      <div className="min-h-32">
        <img
          className="pt-4 w-20 mx-auto"
          src={Premiere}
          alt="Premiere icon"
        />
        <p className="my-4 text-center">Premiere</p>
      </div>
      <div className="min-h-32">
        <img
          className="pt-4 w-20 mx-auto"
          src={AfterEffects}
          alt="After Effects icon"
        />
        <p className="my-4 text-center">After Effects</p>
      </div>

   
      
    </div>
  </div>
</div>




</div>
  );
};

export default About;
