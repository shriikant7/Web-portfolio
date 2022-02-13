import { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const onclickhandler = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="header">
      <div className="logo">hello</div>

      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>

        <div className="mobile-menu">
          {" "}
          <div onClick={onclickhandler}>
            <i class="fi fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setisOpen={setisOpen} />}
        </div>
      </div>
    </div>
  );
};
export default Header;
