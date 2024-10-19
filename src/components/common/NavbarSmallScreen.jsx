import React, { useEffect, useRef } from "react";
import { BiSolidContact } from "react-icons/bi";
import {
  FaAward,
  FaBars,
  FaHandshake,
  FaHome,
  FaTimes
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NavbarSmallScreen = ({ isNavbarOpen, setIsNavbarOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navbarRef = useRef(null);

  // List of navbar items
  const navItems = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/background", name: "Background", icon: <FaHandshake /> },
    { path: "/contact", name: "Contact", icon: <BiSolidContact /> },
    { path: "/portfolio", name: "Portfolio", icon: <FaAward /> },
  ];

  // const toggleNavbar = () => {
  //   setIsNavbarOpen(!isNavbarOpen);
  // };

  // Handle click outside of the navbar to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavbarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsNavbarOpen]);

  // Function to determine active class
  const getLinkClass = (path) =>
    currentPath === path
      ? "bg-green-500 text-black"
      : "text-white hover:bg-DarkGray";

  return (
    <div>
      {/* Navbar for larger screens (fixed) */}
      <div className="bg-DarkGray w-[8vw] h-screen flex-col items-center shadow-lg rounded-xl hidden lg:flex">
        {/* Icon Container */}
        <div className="w-full h-20 flex justify-center items-center rounded-t-xl bg-EveningBlack cursor-pointer">
          <span
            onClick={()=>setIsNavbarOpen(true)}
            className="text-3xl h-14 w-14 flex items-center justify-center font-bold text-Green border-2 border-Green rounded-xl animate-grow-shrink  shadow-md"
          >
            <FaBars />
          </span>
        </div>
        <div className="text-LightGray flex flex-col rotate-90 text-4xl mt-60 font-cascadia">
          Navbar
        </div>
      </div>

      {/* Background Blur Overlay */}
      {isNavbarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsNavbarOpen(false)}
          style={{ zIndex: 999 }} // Ensure it's below the sidebar but above the background
        />
      )}

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-MidNightBlack p-8 rounded-l-xl shadow-lg transform transition-transform duration-500 ease-in-out ${
          isNavbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "250px", zIndex: 1000 }} // Sidebar above the blur overlay
        ref={navbarRef}
      >
        {/* Close Icon */}
        <span
          className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
          onClick={() => setIsNavbarOpen(false)}
        >
          <FaTimes />
        </span>

        {/* Menu Items */}
        <ul className="text-white space-y-4 text-center text-xl mt-48">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center space-x-2 p-2 rounded-lg ${getLinkClass(
                  item.path
                )}`}
                onClick={() => setIsNavbarOpen(false)} // Close sidebar after click
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarSmallScreen; 