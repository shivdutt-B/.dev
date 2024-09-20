import React from 'react'

function Navbar() {
  
  return (
    <div>
      <nav class="flex justify-between items-center p-5 px-[3vw] shadow-[0px_4px_7px_1px_rgba(0,_0,_0,_0.1)] fixed top-0 z-[999] w-[100%] bg-[var(--bg)]">
        <div class="font-[var(--max-weight)] text-[25px] text-[var(--dark-txt)] 
        text-[clamp(25px,2vw,48px)] cursor-pointer flex items-center">
          <span className="relative top-1 right-[-5px]">
            <svg width="27px" height="auto" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.032"></g><g id="SVGRepo_iconCarrier"><path fill="#8144e5" d="M8 3a5 5 0 100 10A5 5 0 008 3z"></path></g></svg>
          </span>
          dev
        </div>
        <div class="flex items-center space-x-8">
          <a href="#" class="text-[var(--light-txt)] font-[var(--mid-weight)] text-[clamp(16px,1.2vw,20px)] py-[2px] px-[8px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-500 rounded-sm">Home</a>
          <a href="#" class="text-[var(--light-txt)] font-[var(--mid-weight)] text-[clamp(16px,1.2vw,20px)] py-[2px] px-[8px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 rounded-sm">About</a>
          <a href="#" class="text-[var(--light-txt)] font-[var(--mid-weight)] text-[clamp(16px,1.2vw,20px)] py-[2px] px-[8px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 rounded-sm">Projects</a>
          <a href="#" class="text-[var(--light-txt)] font-[var(--mid-weight)] text-[clamp(16px,1.2vw,20px)] py-[2px] px-[8px] hover:bg-[var(--theme-color)] hover:text-white transition-all duration-300 rounded-sm">Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar