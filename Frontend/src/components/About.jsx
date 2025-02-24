import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <section id="about" className="p-10 sm:p-16 flex flex-col md:flex-row items-center gap-10">
      <div className="container mx-auto md:pl-20 max-w-3xl">
        <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>

        <div className="text-center md:text-left">
          <p className="text-lg text-base-content">
            Hi! I'm <span className="text-primary font-semibold">Neeraj Singh</span>, a passionate web developer 
            skilled in <span className="font-semibold">MERN Stack</span>. Also proficient in JAVA. I love building applications that are 
            fast, functional, and user-friendly.
          </p>
          <p className="mt-4 text-lg">
            Currently, I'm a student, learning and implementing. If you got a project, hit me up.
          </p>
        </div>
      </div>

      {/* Skills section moves below About text on small screens */}
      <div className="w-full md:w-auto">
        <Skills />
      </div>
    </section>
  );
};

export default About;
