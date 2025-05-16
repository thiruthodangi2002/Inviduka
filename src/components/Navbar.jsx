import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaRocket } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Our Story" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="text-black bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="/Images/Inviduka.png"
            alt="Inviduka Logo"
            className="h-10 w-auto mr-2"
          />
          <span className="text-2xl font-bold">Inviduka</span>
        </Link>

        {/* Mobile toggle button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:ml-auto w-full md:w-auto mt-2 md:mt-0`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block md:inline-block px-3 py-2 rounded text-base font-medium ${
                isActive(link.path)
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700 hover:text-indigo-500"
              }`}
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
