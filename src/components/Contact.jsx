import React from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaBriefcase,
  FaPhone,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { HamburgerArrow } from "react-animated-burgers";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const copyEmail = () => {
  navigator.clipboard.writeText("example@example.com");
  toast.success("Email copied", {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 2000,
  });
};


/* bg-[#001a3f]
 */


const Contact = () => {
  return (
    <div
      name="/contact"
      className="w-full bg-[#ffffff] text-[#444440] dark:text-gray-300 dark:bg-[#181a1b]  pt-20 sm:pl-4 sm:pr-4 text-center h-screen"
    >
      <div className="w-full max-w-[800px] mx-auto">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#3b82f6]">
            Contact
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center pt-8 gap-5 text-[#444440] dark:text-gray-300">
            <a
              className="transition-all duration-100 ease-in-out transform  hover:text-[#3b82f6]"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={40} />
            </a>
            <a
              className="transition-all duration-100 ease-in-out transform hover:text-[#3b82f6]"
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={40} />
            </a>
            <a
              className="transition-all duration-100 ease-in-out transform cursor-pointer hover:text-[#3b82f6]"
              onClick={copyEmail}
            >
              <HiOutlineMail size={40} />
            </a>
          </div>
          <ToastContainer />
        </div>

        <form
          method="POST"
          action="https://getform.io/f/ff243ebd-e5c5-4af6-a8a3-27482096be97"
          className="flex flex-col items-center mx-auto pl-8 pr-8"
          style={{ maxWidth: "600px" }}
        >
          <input
            className="p-2 bg-[#ededed] text-[#303030] placeholder-[#777777] hover:text-[#0e1621] w-full border-solid border-2 "
            type="text"
            placeholder="Name"
            name="name"
            style={{ outline: "none" }}
            required
          />
          <input
            className="my-4 p-2 bg-[#ededed] text-[#303030] placeholder-[#777777] w-full border-solid border-2 "
            type="text"
            placeholder="Email"
            name="email"
            style={{ outline: "none" }}
            required
          />
          <textarea
            className="p-2 bg-[#ededed] text-[#303030] placeholder-[#777777] w-full border-solid border-2 "
            name="message"
            rows="7"
            placeholder="Message"
            style={{ outline: "none" }}
            required
          ></textarea>
          <button className="text-[#0e1621]  bg-[#ffffff] border-solid border-2 border-[#3b82f6] hover:bg-[#3b82f6] hover:border-[#3b82f6] hover:text-[#ffffff] px-4 py-3 my-5 mx-auto flex items-center">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
