import React from "react";

const Hero = () => {
  return (
    <div className="bg-none pt-10 px-6 sm:px-20">
      <div className="hero-content flex flex-col lg:flex-row-reverse gap-10 items-center text-center lg:text-left">
        <img  
          src="/me.jpeg"
          className="w-40 sm:w-60 md:w-72 lg:w-80 rounded-full shadow-2xl shadow-primary"
          alt="Neeraj"
        />
        <div className="lg:pl-10">
          <h1 id="home" className="text-4xl sm:text-6xl font-bold">
            Hi, I am <span className="text-primary">Neeraj</span>, A developer...
          </h1>
          <p className="py-6 font-semibold text-lg sm:text-3xl">
            Passionate about making something functional and beautiful.
          </p>
          <a href="/neeraj_resume.docx" download="neeraj_resume.docx">
            <button className="btn btn-primary font-semibold text-lg sm:text-2xl">
              My resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
