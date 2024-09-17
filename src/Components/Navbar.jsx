import React from 'react'

function Navbar() {
  return (
    <div>
      <nav class="flex justify-between items-center p-5 px-[3vw] shadow-[0px_4px_7px_1px_rgba(0,_0,_0,_0.1)]">
        <div class="font-[var(--max-weight)] text-[25px] text-[var(--dark-txt)] font-[var(--max-heading)] fluid-txt-nav-head cursor-pointer flex items-center">
          <span className="relative top-1 right-[-5px]">
            <svg width="27px" height="auto" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.032"></g><g id="SVGRepo_iconCarrier"><path fill="#8144e5" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path></g></svg>
          </span>
          dev
        </div>
        <div class="flex items-center space-x-8">
          <a href="#" class="text-[var(--light-txt)] font-[var(--mid-weight)] text-[var(--primary-font-size)] fluid-txt-nav-opt">Home</a>
          <a href="#" class="text-[var(--light-txt)] font-[var(--mid-weight)] text-[var(--primary-font-size)] fluid-txt-nav-opt">About</a>
          <a href="#" class="text-[var(--light-txt)] font-[var(--mid-weight)] text-[var(--primary-font-size)] fluid-txt-nav-opt">Projects</a>
          <a href="#" class="text-[var(--light-txt)] font-[var(--mid-weight)] text-[var(--primary-font-size)] fluid-txt-nav-opt">Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar