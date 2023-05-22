import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaPhone } from "react-icons/fa";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { Squash as Hamburger } from 'hamburger-react';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const handleClick = () => setNav(!nav);
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="fixed w-full h-[65px] bg-white dark:bg-[#181a1b] nav-index border-b-2 border-gray-200 dark:border-[#222425]">
      <div className="max-w-[800px] mx-auto flex justify-between items-center">
        <div className="ml-4 mt-2 mb-2 md:ml-2 md:mt-3">
          <Link to="/">
            <img src={Logo} alt="" style={{ width: '40px' }} />
          </Link>
        </div>

        <ul className="hidden md:flex flex-grow justify-center text-gray-600 dark:text-gray-300 text-lg">
          <li>
            <Link to="/about" smooth={true} duration={500} className="py-2 my-3 transition duration-300 ease-in-out relative">
              <span className="nav-link-text">
                <FaUser className="inline-block pb-1 mr-2" size={20} />
                About
              </span>
            </Link>
          </li>
          <li>
            <Link to="/projects" smooth={true} duration={500} className="py-2 my-3 transition duration-300 ease-in-out relative">
              <span className="nav-link-text">
                <FaBriefcase className="inline-block pb-1 mr-2" size={20} />
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link to="/contact" smooth={true} duration={500} className="py-2 my-3 transition duration-300 ease-in-out relative">
              <span className="nav-link-text">
                <FaPhone className="inline-block pb-1 mr-2" size={20} />
                Contact
              </span>
            </Link>
          </li>
        </ul>

        <button
          className="ml-auto p-2 focus:outline-none  mt-2 md:mt-0" 
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <div className="flex items-center justify-center">
              <IoIosSunny className="md:h-6 md:w-6 h-8 w-8 text-gray-300 hover:text-blue-500" />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <IoIosMoon className="md:h-6 md:w-6 h-8 w-8 text-gray-500  hover:text-blue-500" />
            </div>
          )}
        </button>

        <div onClick={handleClick} className="md:hidden z-50 mt-2 mr-4">
          <Hamburger
            color={darkMode ? "rgb(209 213 219)" : "#444440"}
            size={30}
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      <ul className={`md:hidden fixed top-0 right-0 h-screen bg-white dark:bg-[#181a1b] flex flex-col justify-center z-40 gap-8 text-gray-600 dark:text-gray-300 transform ${nav ? 'translate-x-0' : 'translate-x-full'} transition duration-300 ease-in-out`} onClick={handleClick}>
        <li>
          <Link to="/" smooth={true} duration={500} className="ml-16 mr-20 text-4xl transition duration-300 ease-in-out relative">
            <span className="nav-link-text mr-2">
              <FaHome className="inline-block mr-2 pb-1" size={30} />
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link to="/about" smooth={true} duration={500} className="ml-16 mr-20 text-4xl transition duration-300 ease-in-out relative">
            <span className="nav-link-text">
              <FaUser className="inline-block mr-2 pb-1" size={30} />
              About
            </span>
          </Link>
        </li>
        <li>
          <Link to="/projects" smooth={true} duration={500} className="ml-16 mr-20 text-4xl transition duration-300 ease-in-out relative">
            <span className="nav-link-text">
              <FaBriefcase className="inline-block mr-2 pb-1" size={30} />
              Projects
            </span>
          </Link>
        </li>
        <li>
          <Link to="/contact" smooth={true} duration={500} className="ml-16 mr-20 text-4xl transition duration-300 ease-in-out relative">
            <span className="nav-link-text">
              <FaPhone className="inline-block mr-2 pb-1" size={30} />
              Contact
            </span>
          </Link>
        </li>
      </ul>

      {/* Background overlay */}
      {nav && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={handleClick}></div>}
    </div>
  );
};

export default Navbar;
