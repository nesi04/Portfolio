import React, { useEffect } from "react";
import useStore from "../store/zustand.js"; // Ensure correct path

const Projects = () => {
  const { projects, fetchProjects } = useStore(); // Get projects from Zustand

  useEffect(() => {
    fetchProjects(); // Fetch projects when component mounts
  }, []);

  // Check if projects is undefined before mapping
  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-600">Loading projects...</p>;
  }

  return (
    <section id="projects" className="py-16 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center  mb-8">Projects</h2>

        <div className="grid gap-30 md:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project) => (
            <div className="card  image-full w-96 shadow-xl  border-3 flex flex-col gap-4">
            <figure>
              <img
                src={project.image}
                alt={project.title}/>
            </figure>
            <div className="card-body gap-4">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <p className="py-2">Tech Stack :   <div className="flex gap-3 py-3"> {project.techStack.map((tech, index) => (
                    <span key={index} className="badge badge-outline">{tech}</span>
                  ))}</div> </p> 

              <div className="card-actions justify-end">
                <button className="btn btn-primary  ">Live Demo</button>
                <button className="btn btn-primary  ">GitHub Link</button>
              </div>
            </div>
          </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
