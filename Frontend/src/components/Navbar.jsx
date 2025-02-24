import React, { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react"; // Import icons

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "night");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "nord" ? "night" : "nord"));
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-base-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a className="text-xl sm:text-2xl font-bold">Neeraj Singh</a>

        {/* Desktop Nav (Hidden on mobile) */}
        <ul className="hidden md:flex items-center gap-6 font-semibold">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
              {theme === "nord" ? <Moon className="size-6" /> : <Sun className="size-6" />}
            </button>
          </li>
        </ul>

        {/* Hamburger Menu Button (Visible only on mobile) */}
        <button
          className="md:hidden btn btn-ghost"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      {menuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-base-100 shadow-lg">
          <ul className="flex flex-col items-center gap-4 p-4 font-semibold">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li>
              <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
                {theme === "nord" ? <Moon className="size-6" /> : <Sun className="size-6" />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
