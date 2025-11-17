import React, { useEffect, useState } from "react";
import SocialMediaLinks from "../Database/SocialMediaLinks";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "Skills", link: "#skills" },
    { label: "Project", link: "#projects" }, // FIXED
    { label: "Contact", link: "#contact" },
  ];

  // Animate navbar entrance
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#mobile-menu") && !target.closest("#hamburger-btn")) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          fixed w-full top-0 left-0 z-50
          ${scrolled ? "backdrop-blur-lg bg-gray-950/80 shadow-lg" : "bg-transparent"}
          transition-all duration-500 ease-in-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
        `}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto h-16 px-4">

          {/* Logo */}
          <div className="flex items-center relative cursor-pointer group">
            <p className="relative text-2xl font-extrabold text-white tracking-wider hover:text-blue-400 transition-all duration-300 animate-pulse flex items-center">
              <img
                src="/astronaut.png"
                alt="Astronaut"
                className="w-8 h-8 object-contain mr-2 drop-shadow-[0_0_6px_white]"
              />
              Portfolio
            </p>
          </div>

          {/* Hamburger Button */}
          <button
            id="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110 hover:bg-gray-800"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${menuOpen ? "rotate-90 text-blue-400" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-white">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="relative py-2 px-3 rounded-lg hover:text-blue-400 transition-all duration-300 group"
              >
                {item.label}

                {/* Glowing Underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full group-hover:shadow-[0_0_10px_rgba(59,130,246,0.7)]"></span>
              </a>
            ))}

            {/* Desktop Social Media Icons */}
            <SocialMediaLinks className="ml-4" />
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`
          fixed top-0 right-0 h-screen w-64
          bg-gradient-to-b from-gray-900 via-gray-850 to-gray-950
          shadow-xl rounded-l-xl transform transition-transform duration-300 z-50
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="flex flex-col mt-16 space-y-4 px-4 text-white">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="block py-2 px-4 rounded-lg text-white font-medium hover:scale-105 transition-all duration-300 relative"
              >
                {item.label}

                {/* Hover Glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 rounded-lg"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* SOCIAL MEDIA (MOBILE) */}
        <div className="px-4 mt-8">
          <p className="text-gray-400 text-sm mb-2">Social Media</p>
          <SocialMediaLinks />
        </div>
      </div>
    </>
  );
};

export default Navbar;
