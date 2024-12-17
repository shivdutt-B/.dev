import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu after clicking a link
  const handleMenuClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-5 px-[3vw] shadow-[0px_4px_7px_1px_rgba(0,_0,_0,_0.1)] fixed top-0 z-[999] w-[100%] bg-[var(--bg)]">
        {/* Logo */}
        <a
          href="/"
          className="font-[var(--max-weight)] text-[clamp(25px,2vw,48px)] text-[var(--dark-txt)] cursor-pointer flex items-center"
        >
          <span className="relative top-1 right-[-5px]">
            <svg
              width="27px"
              height="auto"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.032"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#8144e5" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path>
              </g>
            </svg>
          </span>
          dev
        </a>

        {/* Hamburger Icon (Visible on Small Screens) */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <div className={`ham-container ${isMenuOpen ? "open" : ""}`}>
            <span className="line top"></span>
            <span className="line middle"></span>
            <span className="line bottom"></span>
          </div>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#intro"
            className="text-[var(--light-txt)] font-[var(--mid-weight)] text-[clamp(16px,1.2vw,20px)] py-[2px] px-[8px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-500 rounded-sm"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[var(--light-txt)] font-[var(--mid-weight)] text-[clamp(16px,1.2vw,20px)] py-[2px] px-[8px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 rounded-sm"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-[var(--light-txt)] font-[var(--mid-weight)] text-[clamp(16px,1.2vw,20px)] py-[2px] px-[8px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 rounded-sm"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-[var(--light-txt)] font-[var(--mid-weight)] text-[clamp(16px,1.2vw,20px)] py-[2px] px-[8px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 rounded-sm"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute justify-center transition duration-300 h-[100vh] top-[75px] left-0 w-full bg-[var(--bg)] py-5 flex-col items-center space-y-5 md:hidden ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <a
            href="#intro"
            onClick={() => handleMenuClick("home")}
            className="text-[var(--light-txt)] font-[var(--mid-weight)] text-[25px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-500 px-5 py-2 rounded-sm"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => handleMenuClick("about")}
            className="text-[var(--light-txt)] font-[var(--mid-weight)] text-[25px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 px-5 py-2 rounded-sm"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => handleMenuClick("projects")}
            className="text-[var(--light-txt)] font-[var(--mid-weight)] text-[25px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 px-5 py-2 rounded-sm"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => handleMenuClick("contact")}
            className="text-[var(--light-txt)] font-[var(--mid-weight)] text-[25px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 px-5 py-2 rounded-sm"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
