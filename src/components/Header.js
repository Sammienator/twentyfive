import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import logoo from "../assets/logoo.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 z-50 transition-colors duration-300 backdrop-blur-md head">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <img src={logoo} alt="Logo" className="h-12 sm:h-20" />

        {/* Hamburger Icon for small and medium screens */}
        <button 
          onClick={toggleMenu} 
          className="sm:hidden text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation - Desktop Version */}
        <nav className="hidden sm:flex items-center space-x-6 lg:space-x-8">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Navigation - Mobile Version */}
        <nav className={`sm:hidden flex flex-col items-start space-y-2 absolute top-20 left-0 right-0 bg-white/90 dark:bg-gray-900/90 p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Dark Mode Toggle - always visible */}
        <button
          onClick={toggleDarkMode}
          className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
        </button>
      </div>
    </header>
  );
};

export default Header;