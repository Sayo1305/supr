import React from 'react'
import "../assets/css/mentor.css";
import MentorCard from '../components/MentorCard';
const Mentor = () => {
  return (
    <div className='MentorContainer'>
      <div className='MentorHead'>Chat or Book 1 on 1 Session with our Mentors</div>
      <div className='MentorGridCont'>
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>
            <MentorCard/>
      </div>
    </div>
  )
}

export default Mentor