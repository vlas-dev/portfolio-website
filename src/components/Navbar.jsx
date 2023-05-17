import React, { useState } from "react";

import {
  FaHome,
  FaUser,
  FaTools,
  FaBriefcase,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { Link } from "react-scroll";
import { HamburgerArrow } from "react-animated-burgers";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[65px] flex justify-between items-center px-4 bg-[#0f0f0f] text-gray-300 nav-index">
      {/* MENU */}
      <ul className="hidden md:flex flex-grow justify-center items-center text-white text-lg gap-5 ">
        <li>
          {" "}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="py-2 my-3 transition duration-300 ease-in-out relative"
          >
            <span className="nav-link-text  mr-2">
              {" "}
              <FaHome className="inline-block mr-2 pb-1" size={20} />
              Home
            </span>
          </Link>
        </li>

        <li>
          {" "}
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="py-2 my-3 transition duration-300 ease-in-out relative"
          >
            <span className="nav-link-text  mr-2">
              {" "}
              <FaUser className="inline-block mr-2 pb-1" size={20} />
              About
            </span>
          </Link>
        </li>

       
        {/* <li>
          {" "}
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="py-2 my-3 transition duration-300 ease-in-out relative"
          >
            <span className="nav-link-text  mr-2">
              {" "}
              <FaTools className="inline-block mr-2 pb-1" size={20} />
              Skills
            </span>
          </Link>
        </li>
 */}


        <li>
          {" "}
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="py-2 my-3 transition duration-300 ease-in-out relative"
          >
            <span className="nav-link-text  mr-2">
              {" "}
              <FaBriefcase className="inline-block mr-2 pb-1" size={20} />
              Projects
            </span>
          </Link>
        </li>

        <li>
          {" "}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="py-2 my-3 transition duration-300 ease-in-out relative"
          >
            <span className="nav-link-text  mr-2">
              {" "}
              <FaPhone className="inline-block mr-2 pb-1" size={20} />
              Contact
            </span>
          </Link>
        </li>
      </ul>

      {/* HAMBURGER */}
      <div onClick={handleClick} className="md:hidden z-50 hover:[#5f5b5b]">
        <HamburgerArrow
          isActive={nav}
          toggleButton={handleClick}
          barColor="white"
          buttonWidth={30}
        />
      </div>

      {/* MOBILE MENU */}
      <ul
        className={
          !nav
            ? "hidden"
            : "md:hidden fixed top-0 left-0 w-full h-screen bg-[#2d2d2b] flex flex-col justify-center px-20 z-40 gap-20"  
        }
      >





        

        <li>
          {" "}
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            className="ml-16 mr-20 text-4xl transition duration-300 ease-in-out relative"
          >
            <span className="nav-link-text  mr-2">
              {" "}
              <FaHome className="inline-block mr-2 pb-1" size={30} />
              Home
            </span>
          </Link>
        </li>









        <li>
          {" "}
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            className="ml-16 mr-20 text-4xl transition duration-300 ease-in-out relative"
          >
            <span className="nav-link-text  mr-2">
              {" "}
              <FaUser className="inline-block mr-2 pb-1" size={30} />
              About
            </span>
          </Link>
        </li>
        
        
      


        <li>
          {" "}
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
            className="ml-16 mr-20 text-4xl transition duration-300 ease-in-out relative"
          >
            <span className="nav-link-text  mr-2">
              {" "}
              <FaBriefcase className="inline-block mr-2 pb-1" size={30} />
              Projects
            </span>
          </Link>
        </li>


        <li>
          {" "}
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            className="ml-16 mr-20 text-4xl transition duration-300 ease-in-out relative"
          >
            <span className="nav-link-text  mr-2">
              {" "}
              <FaPhone className="inline-block mr-2 pb-1" size={30} />
              Contact
            </span>
          </Link>
        </li>



      </ul>
    </div>
  );
};

export default Navbar;
