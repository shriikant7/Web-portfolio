import react from "react";
import "./project-card.css";
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-link">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i class="fi fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  );
};
export default ProjectCard;
