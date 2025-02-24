import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="bg-none pt-10 pl-20 ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20 justify-between">
          <img  
            src="/me.jpeg"
            className="max-w-sm rounded-full shadow-2xl shadow-primary"
          />
          <div className="pl-10 ">
            <h1 id="home" className="text-6xl font-bold">Hi , I am <span className="text-primary">Neeraj</span> , A developer...</h1>
            <p className="py-6 font-semibold text-3xl">
             Passionate about making something functional and beautiful.
            </p>
            <a href="/resume.docx" download="Neeraj_resume.docx">
            <button  className="btn btn-primary font-semibold text-2xl">My resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
