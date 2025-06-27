import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between md:justify-between items-center p-5 px-[3vw] shadow-[0px_4px_7px_1px_rgba(0,_0,_0,_0.1)] fixed top-0 z-[99] w-[100%] bg-[var(--bg)]">
        {/* Logo centered on mobile, left on desktop */}
        <div className="flex-1 flex justify-center md:justify-start">
          <a
            href="/"
            className="font-[var(--max-weight)] text-[clamp(25px,2vw,48px)] text-[var(--dark-txt)] cursor-pointer flex items-center"
          >
            <span className="relative right-[-5px]">
              <svg
                width="40px"
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
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#intro"
            className="text-[var(--light-txt)] font-[var(--mid-weight)] text-black text-[clamp(16px,1.2vw,20px)] py-[2px] px-[8px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 rounded-sm"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-[var(--light-txt)] font-[var(--mid-weight)] text-black text-[clamp(16px,1.2vw,20px)] py-[2px] px-[8px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 rounded-sm"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-[var(--light-txt)] font-[var(--mid-weight)] text-black text-[clamp(16px,1.2vw,20px)] py-[2px] px-[8px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 rounded-sm"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}