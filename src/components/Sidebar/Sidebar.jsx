import React, { useEffect, useRef } from "react";
import Profile from "../../assets/Profile_picture.png"; // Update path as necessary
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Language from "./Language";
import Skills from "./Skills";
import Tools from "./Tools";
import Contact from "./Contact";
import Download from "./Download";

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Close sidebar if clicked outside of it (for smaller screens)
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div>
      {/* Sidebar for small screens with background blur */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 lg:hidden" />
      )}

      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 transition-transform lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="fixed w-64 h-screen bg-MidNightBlack text-gray-200 z-50 flex flex-col items-center shadow-lg transform lg:translate-x-0"
          ref={sidebarRef}
        >
          {/* Profile section */}
          <div className="flex flex-col w-full pt-4 items-center rounded-t-xl bg-DarkGray">
            <img
              src={Profile}
              alt="Profile"
              className="rounded-full h-32 w-32 object-cover shadow-xl"
            />
            <h2 className="mt-4 text-xl font-semibold font-cascadia-normal">
              Ashirbad Narayan Prusty
            </h2>
            <p className="text-sm mb-4 text-gray-400 text-center">
              MERN Stack Developer | Full Stack Developer
            </p>
          </div>

          {/* Sidebar sections */}
          <div className="flex flex-col overflow-y-auto space-y-6 divide-y divide-white px-4 pt-4 flex-grow no-scrollbar">
            <Language />
            <Skills />
            <Tools />
            <Contact />
            <Download />
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 items-center rounded-b-xl bottom-0 z-50 h-12  w-full bg-DarkGray text-Snow py-4 md:py-6 lg:py-8">
  <a
    href="https://github.com/ashirbadprusty"
    className="text-gray-400 hover:text-gray-200"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub size={24} />
  </a>
  <a
    href="https://www.linkedin.com/in/ashirbad-narayan-prusty-ba559927b/"
    className="text-gray-400 hover:text-gray-200"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedin size={24} />
  </a>
</div>

        </div>
      </div>

      {/* Sidebar for larger screens (fixed) */}
      <div className="hidden lg:flex fixed flex-col left-0 top-0 w-[17rem] h-screen bg-MidNightBlack text-gray-200 z-50 shadow-lg">
        <div className="flex flex-col w-full pt-4 items-center rounded-t-xl bg-DarkGray">
          <img
            src={Profile}
            alt="Profile"
            className="rounded-full h-32 w-32 object-cover shadow-xl"
          />
          <h2 className="mt-4 text-xl font-semibold font-cascadia-normal">
            Ashirbad Narayan Prusty
          </h2>
          <p className="text-sm mb-4 text-gray-400 text-center">
            MERN Stack Developer | Full Stack Developer
          </p>
        </div>

        {/* Scrollable content */}
        <div className="flex flex-col overflow-y-auto space-y-6 divide-y divide-white px-4 pt-4 flex-grow no-scrollbar">
          <Language />
          <Skills />
          <Tools />
          <Contact />
          <Download />
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-xl items-center rounded-b-xl h-24 w-[17rem] bg-DarkGray text-Snow">
          <a
            href="https://github.com/ashirbadprusty"
            className="text-gray-400 hover:text-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashirbad-narayan-prusty-ba559927b/"
            className="text-gray-400 hover:text-gray-200"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
