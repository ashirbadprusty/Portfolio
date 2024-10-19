import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import Sidebar from "../Sidebar/Sidebar";
import NavbarSmallScreen from "./NavbarSmallScreen";

const Banner = ({ content }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleNavbar = () => setIsNavbarOpen((prev) => !prev);

  return (
    <div className="relative h-screen w-full bg-DeepNightBlack lg:ml-[17rem] flex flex-col justify-between overflow-y-auto no-scrollbar">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Render Navbar */}
      <div className="relative h-screen w-full bg-DeepNightBlack flex flex-col justify-between overflow-y-auto no-scrollbar">
        <NavbarSmallScreen
          isNavbarOpen={isNavbarOpen}
          setIsNavbarOpen={setIsNavbarOpen}
        />
      </div>

      <div
        className={`h-screen w-full transition-opacity duration-300 ${
          isNavbarOpen || isSidebarOpen ? "opacity-50" : "opacity-100"
        }`}
        style={{
          backdropFilter: isNavbarOpen || isSidebarOpen ? "blur(8px)" : "none",
        }}
      >
        {/* Top bar for small screens */}
        <div className="bg-MidNightBlack h-12 w-full flex justify-between items-center p-4 lg:hidden fixed top-0 z-20">
          <span
            className="text-xl h-9 w-9 flex items-center justify-center font-bold text-Green border-2 border-Green rounded-xl animate-grow-shrink shadow-md cursor-pointer"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <SlOptionsVertical />
          </span>
          <span
            className="text-xl h-9 w-9 flex items-center justify-center font-bold text-Green border-2 border-Green rounded-xl animate-grow-shrink shadow-md"
            onClick={toggleNavbar}
            aria-label="Toggle Navbar"
          >
            <FaBars />
          </span>
        </div>
        <div className="flex-grow pt-12 lg:pt-0">{content}</div>{" "}
        {/* Adjust padding to avoid content overlap */}
      </div>
    </div>
  );
};

export default Banner;
