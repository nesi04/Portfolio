import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";


const Navbar = () => {
  const [theme,setTheme]=useState(localStorage.getItem("theme")||"night");
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme",theme);
    localStorage.setItem("theme",theme);
  },[theme]);
  const toggleTheme=()=>{
    setTheme((prevTheme)=>(prevTheme==="nord"?"night":"nord"));
  };
  const [isScrolled , setIsScrolled]=useState(false);
  useEffect(()=>{
    const handleScroll =()=>{
      if(window.scrollY>50){
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }

    };
    window.addEventListener("scroll",handleScroll);
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    };

  },[]);
  return (
    <div className="sticky top-0 z-50">
      <div className={` navbar transition-all duration-300 ${isScrolled?"bg-base-100":"bg-none"} `}>
        <div className="flex-1">
          <a className="  text-base-900  text-xl sm:text-2xl font-bold pl-5" >Neeraj Singh</a>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1 font-semibold  flex items-center justify-center gap-7">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <details>
                <summary>Contact</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a href="#form">Form</a>
                  </li>
                  <li>
                    <a href="#others"> Others</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                onClick={toggleTheme}
              >
                {theme === "nord" ? <Moon className="size-6" /> : <Sun className="size-6" />}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
