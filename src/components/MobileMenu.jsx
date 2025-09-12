import React, { useEffect } from 'react'

export const MobileMenu = ({menuOpen, setmenuOpen}) => {

  return (
    <div
  className={`fixed inset-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
    transition-opacity duration-300 ease-in-out
    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
>

           <button onClick={()=> setmenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
            &times;
           </button>     
        <a href="#home" onClick={() => setmenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                        Home
                    </a>
                    <a href="#About" onClick={() => setmenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                        About
                    </a>
                    <a href="#Projects" onClick={() => setmenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                        Projects
                    </a>
                    <a href="#Contact" onClick={() => setmenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
                        Contact
                    </a>
    </div>
  );
};
