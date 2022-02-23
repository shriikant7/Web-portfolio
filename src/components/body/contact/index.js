import react from "react";
import Seperator from "../../common/social-contacts/seperator";
import SocialContact from "../../common/social-contacts";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <Seperator />
      <label className="section-title">Contacts</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Feel free to connect with me on social media! </p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/ShrikantMule.pdf")}>
            <i class="fi fi-rr-download download-icon"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
