import SocialContact from "../../common/social-contacts";
import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There,
          <br /> i am <span className="info-name">Shrikant.</span> <br />i love
          JavaScript
        </div>
        <div className="about-photo">
          <img src={require("../../../assets/code.png")} className="picture" />
        </div>
      </div>
      <SocialContact />
    </div>
  );
};
export default About;
