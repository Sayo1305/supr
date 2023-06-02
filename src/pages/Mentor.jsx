import React, { useState } from "react";
import "../assets/css/mentor.css";
import MentorCard from "../components/MentorCard";
import MentorFormModal from "../components/MentorFormModal";
const Mentor = () => {
  const [openmodal, setopenmodal] = useState(false);
  return (
    <>
    <MentorFormModal openmodal={openmodal} setopenmodal={setopenmodal}/>
      <div className="MentorContainer">
        <div className="MentorHead">
          Chat or Book 1 on 1 Session with our Mentors
          <div
            onClick={() => {
              setopenmodal(!openmodal);
            }}
            className="BecomeMentorButton"
          >
            Be A Mentor
          </div>
        </div>
        <div className="MentorGridCont">
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </div>
      </div>
    </>
  );
};

export default Mentor;
