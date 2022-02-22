import react from "react";
import Seperator from "../../common/social-contacts/seperator";
import { SkillsData } from "../../data/skills";
import SkillsCard from "./skills-card";
import "./skills.css";
const Skills = () => {
  const data = SkillsData;
  return (
    <div className="skills">
      <Seperator />
      <label className="section-title">skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skills) => {
                  return <SkillsCard skills={skills} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
