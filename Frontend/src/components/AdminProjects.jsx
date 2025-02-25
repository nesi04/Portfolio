import React, { useEffect, useState } from "react";
import useStore from "../Store/zustand.js";
import { Link } from "react-router-dom";

const AdminProjects = () => {
  const {
    projects,
    fetchProjects,
    addNewProject,
    updateExistingProject,
    removeProject,
  } = useStore();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    imageUrl: "",
    liveDemo: "",
    gitHubLink: "",
  });

  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add a new project
  const handleAddProject = async (e) => {
    e.preventDefault();
    await addNewProject(formData);
    setFormData({
      title: "",
      description: "",
      techStack: "",
      imageUrl: "",
      liveDemo: "",
      gitHubLink: "",
    });
  };

  // Handle edit
  const handleEditClick = (project) => {
    setEditingProject(project);
    setFormData(project);
  };

  // Update project
  const handleUpdateProject = async (e) => {
    e.preventDefault();
    await updateExistingProject(editingProject._id, formData);
    setEditingProject(null);
    setFormData({
      title: "",
      description: "",
      techStack: "",
      imageUrl: "",
      liveDemo: "",
      gitHubLink: "",
    });
  };

  // Delete project
  const handleDelete = async (id) => {
    await removeProject(id);
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Admin Projects</h2>

      {/* Add Project Form */}
      <form onSubmit={editingProject ? handleUpdateProject : handleAddProject} className="mb-5">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="title" placeholder="Project Name" value={formData.title} onChange={handleChange} className="input input-bordered" required />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="input input-bordered" required />
          <input type="text" name="techStack" placeholder="Tech Stack" value={formData.techStack} onChange={handleChange} className="input input-bordered" required />
          <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} className="input input-bordered" required />
          <input type="text" name="liveDemo" placeholder="Live Demo URL" value={formData.liveDemo} onChange={handleChange} className="input input-bordered" />
          <input type="text" name="gitHubLink" placeholder="GitHub URL" value={formData.gitHubLink} onChange={handleChange} className="input input-bordered" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {editingProject ? "Update Project" : "Add Project"}
        </button>
      </form>

      {/* Projects Table */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Tech Stack</th>
              <th>Image</th>
              <th>Demo</th>
              <th>GitHub</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.slice().reverse().map((project) => (
              <tr key={project._id} className="bg-base-200">
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{project.techStack}</td>
                <td>
                  <img src={project.imageUrl} alt={project.title} className="w-16 h-16 object-cover rounded" />
                </td>
                <td>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Live Demo
                  </a>
                </td>
                <td>
                  <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    GitHub
                  </a>
                </td>
                <td className="flex gap-2">
                  <button onClick={() => handleEditClick(project)} className="btn btn-sm btn-warning">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(project._id)} className="btn btn-sm btn-error">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-10 py-10 items-center justify-center">
        <Link to="/admin">
          <button className="text-primary hover:text-secondary">Back</button>
        </Link>
        <Link to="/">
          <button className="text-primary hover:text-secondary">HomePage</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminProjects;
