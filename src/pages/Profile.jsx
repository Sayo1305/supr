import React from 'react';
import '../assets/css/profile.css';
import ProfileImg from '../assets/images/man.png'



const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="imgContainer">
        <img src={ProfileImg} className="pImg" alt="profile"/>
        <h3 className="username">Username</h3>
        
      </div>
      <div className="rightSide">
        hello 
      </div>

      </div>
    
  )
}
export default Profile