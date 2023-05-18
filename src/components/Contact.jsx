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

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#001a3f] text-[#ffffff] pt-32 flex flex-col justify-center items-center "
    >
      <div className="max-w-[1000px] w-full  px-4 ">
        <div className="max-w-[500px]">
          <form
            method="POST"
            action="https://getform.io/f/ff243ebd-e5c5-4af6-a8a3-27482096be97"
            className="flex flex-col  w-full "
          >
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-[#ffffff]">
                Contact
              </p>

              {/* SOCIAL ICONS */}
              <div className="gap-4 flex items-center text-[#ffffff] my-5 pt-8">
                <a
                  className="transition-all duration-100 ease-in-out transform hover:text-black"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={40} />
                </a>
                <a
                  className="transition-all duration-100 ease-in-out transform hover:text-black"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={40} />
                </a>
                <a
                  className="transition-all duration-100 ease-in-out transform hover:text-black cursor-pointer"
                  onClick={copyEmail}
                >
                  <HiOutlineMail size={40} />
                </a>
              </div>
              <ToastContainer />
            </div>
            <input
              className="rounded-lg p-2 bg-[#ffffff] text-[#303030] placeholder-[#777777]"
              type="text"
              placeholder="Name"
              name="name"
              style={{ outline: "none" }}
              required
            />
            <input
              className="rounded-lg my-4 p-2 bg-[#ffffff] text-[#303030] placeholder-[#777777]"
              type="text"
              placeholder="Email"
              name="email"
              style={{ outline: "none" }}
              required
            />
            <textarea
              className="rounded-lg p-2 bg-[#ffffff] text-[#303030] placeholder-[#777777]"
              name="message"
              rows="7"
              placeholder="Message"
              style={{ outline: "none" }}
              required
            ></textarea>
            <button className="rounded-lg text-[#0f0f0f] border-[#ffffff] bg-[#ffffff] border-2 hover:bg-black hover:border-black hover:text-[#ffffff] px-4 py-3 my-5 mx-auto flex items-center ">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
