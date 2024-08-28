import React from "react";

const Header = () => {
    return ( 
        
      <header className=" w-full top-0 z-50 text-white bg-color-1 ">

      <nav className="relative flex flex-wrap items-center p-8 mx-auto md:px-12 px-2 justify-end">
        <div className="flex px-4 items-center">
        <div>
                <a className='btn-primary' href="/assets/Oghenefegor-Idoro-Corporate-Resume.pdf" target="_blank">My Resume</a>
              </div>
          <div aria-label="Toggle Menu" className="buger relative w-10 h-6 bg-none appearance-none cursor-pointer  focus:outline-none mx-4">
            <span ></span>
            <span ></span>
            <span ></span>
          </div>
        </div>
      </nav>
    </header>
    );
}

export default Header;