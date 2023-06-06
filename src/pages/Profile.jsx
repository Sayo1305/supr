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

    const { id } = useParams();

    useEffect(() => {
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