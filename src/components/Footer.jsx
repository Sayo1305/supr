import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footerContainer">
      <div className="footerDiv">
        <div className="footerLeft">
          <div>SkillVerse</div>
          <div>© 2023 SkillVerse Foundation. All rights reserved.</div>
        </div>
        <div className="footerRightb">
          <div className="footerRightInputDiv">
            <input className="footerRightInput" type="email" name="" id="" />
            <div className="footerRightButton">Email Us</div>
          </div>
          <div className="footerRight">
             {/* <div className="footerRightDiv">
              <div className="footerRightDivHead">Unknown</div>
              <div>Resouces</div>
              <div>Contributors</div>
              <div>Project</div>
              <div>mentors</div>
            </div>  */}
            <div className="footerRightDiv">
              <div className="footerRightDivHead">SkilllVerse</div>
              <div onClick={() => {
                    navigate("/Resources") ;
                  }}>Resources
                  </div>
              <div onClick={() => {
                    navigate("/Resources") ;
                  }}>Contributors</div>
              <div onClick={() => {
                    navigate("/projects") ;
                  }}>Project</div>
              <div onClick={() => {
                    navigate("/Mentors") ;
                  }}>mentors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
