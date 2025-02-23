import React from "react";

const Footer = () => {
  return (
    <div className="mt-3 p-4 bg-primary/10" id="others">
      <footer className="footer flex flex-col md:flex-row items-center justify-between">
        <p className="font-bold text-lg ">You can find me here ---</p>
        
        <div className="flex gap-4">
          <a href="https://github.com/nesi04" target="_blank" rel="noopener noreferrer">
            <img src="/git.svg" className="size-9 hover:scale-110 transition-transform duration-200" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/neeraj-singh04/" target="_blank" rel="noopener noreferrer">
            <img src="/link.svg" className="size-9 hover:scale-110 transition-transform duration-200" alt="LinkedIn" />
          </a>
          <a href="https://leetcode.com/u/Azure04/" target="_blank" rel="noopener noreferrer">
            <img src="/leet.svg" className="size-9 hover:scale-110 transition-transform duration-200" alt="Twitter" />
          </a>
          <a href="mailto:neeraj579singh@gmail.com">
            <img src="/in1.svg" className="size-9 hover:scale-110 transition-transform duration-200" alt="Email" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
