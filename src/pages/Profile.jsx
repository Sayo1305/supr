import React from 'react';
import '../assets/css/profile.css';
import ProfileImg from '../assets/images/man.png'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";



const Profile = () => {
  const [applications, setapplications] = useState([]);
  const [Myprojects, setMyprojects] = useState([]);
  const [username, setusername] = useState("");

  const { id } = useParams();

  useEffect(() => {
    onValue(ref(db, `Users/${id}`), (snapshot) => {
      const data = snapshot.val();
      setusername(data.name);
    });
    onValue(ref(db, `MyApplications/${id}`), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataKeys = Object.keys(data);
        let arr = [];
        for (let i = 0; i < dataKeys.length; i++) {
          arr.push(data[dataKeys[i]]);
        }
        console.log(arr);
        setapplications(arr);
      }
    });
    onValue(ref(db, `myProjects/${id}`), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataKeys = Object.keys(data);
        let arr = [];
        for (let i = 0; i < dataKeys.length; i++) {
          arr.push(data[dataKeys[i]]);
        }
        console.log(arr);
        setMyprojects(arr);
      }
    });
  }, []);
  return (
    <div className="profileContainer">
      <div className="imgContainer">
        <img src={ProfileImg} className="pImg" alt="profile" />
        <h3 className="username">{username}</h3>
        <button>edit profile</button>
      </div>
      <div className="rightSide">
        <div className="overview">
          <div className="about">
            <span>About</span>
            <div className="aboutmsg"></div>
          </div>
          <div className="techstack">
            <span>Tech Stack</span>
            <div className="techstackbox"></div>
          </div>
        </div>
        <div className="myprojects">
          <span>MY PROJECTS</span>
          {Myprojects.map((item) => (
            <div className="myprojectcontainer">
              <div>
                <div className="projname">{item.projname}</div>
                <div className="projdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis quas numquam est et quo recusandae dolorem quia accusantium commodi! Odio assumenda cumque nihil corrupti excepturi est voluptates. Libero, odio?</div>
                <div className="createdat">1 day ago</div>
              </div>
              <>
                <button className='projdeletebtn'>delete</button>
              </>
            </div>
          ))}
        </div>
        <div className="myapplications">
          <span>MY APPLICATIONS</span>
          {applications.map((item) => {
            <div className="myprojectcontainer">
              <div>
                <div className="projname">{item.projname}</div>
                <div className="projdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis quas numquam est et quo recusandae dolorem quia accusantium commodi! Odio assumenda cumque nihil corrupti excepturi est voluptates. Libero, odio?</div>
                <div className="createdat">1 day ago</div>
              </div>
              <>
                <button className='projdeletebtn'>delete</button>
              </>
            </div>
          })}
        </div>
        <div className="myresources">


        </div>
      </div>

    </div>

  )
}
export default Profile