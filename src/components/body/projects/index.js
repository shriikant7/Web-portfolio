import react from "react";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./projects.css";
const Projects = () => {
  const data = ProjectData;
  return (
    <div className="projects">
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
