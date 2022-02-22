import react from "react";
import "./skills-card.css";
const SkillsCard = ({ skills }) => {
  return (
    <div className="skills-card">
      <div className="skills-icon">{skills.icon}</div>
      <label className="skills-name">{skills.name}</label>
    </div>
  );
};
export default SkillsCard;
