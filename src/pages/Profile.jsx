import React from 'react';
import '../assets/css/profile.css';
import ProfileImg from '../assets/images/man.png'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import { onValue, ref, remove } from "firebase/database";
import Swal from 'sweetalert2';
import womanprofile from '../assets/images/woman.png'
import manprofile from '../assets/images/man.png'
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'
import EditProfileModal from '../components/EditProfileModal';




const Profile = () => {
  const navigate = useNavigate();
  const [applications, setapplications] = useState([]);
  const [Myprojects, setMyprojects] = useState([]);
  const [username, setusername] = useState("");
  const [gender, setgender] = useState("");
  const [CanEdit, setCanEdit] = useState(false);
  const [openmodal, setopenmodal] = useState(false);


  const { id } = useParams();

  const currUserId = localStorage.getItem("suprUserId");

  useEffect(() => {
    onValue(ref(db, `Users/${id}`), (snapshot) => {
      const data = snapshot.val();
      setusername(data.name);
      setgender(data.gender);
      if(id === currUserId){
        setCanEdit(true);
      }
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
      } else {
        setapplications(null);
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
        setMyprojects(arr);
      } else {
        setMyprojects(null);
      }
    });
  }, []);

  const handleDeleteApplication = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        remove(ref(db, `MyApplications/${id}/${item.projid}`));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  const handleDeleteProject = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        remove(ref(db, `myProjects/${id}/${item.projid}`));
        remove(ref(db, `ProjectPosts/${item.projid}`));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }



  return (
    <>
    <EditProfileModal openmodal={openmodal} setopenmodal={setopenmodal} projid={id} />
    <div className="profileContainer">
      <div className="imgContainer">
        {gender === "Female" ? (
          <img
            onClick={() => { navigate(`/profile/${id}`) }}
            className="pImg"
            src={womanprofile}
            alt="profile"
          />
        ) : (
          <img
            onClick={() => { navigate(`/profile/${id}`) }}
            className="pImg"
            src={manprofile}
            alt="profile"
          />
        )}
        <h3 className="username">{username}</h3>
        {CanEdit === true ? (
          <button onClick={() => { setopenmodal(!openmodal); }}>edit profile</button>
        ):(
          <></>
        )}
        
        <div className="profilelinks">
          <div className="github"><AiFillGithub/></div>
          <div className="linkedIn"><AiFillLinkedin/></div>
          <div className="profileEmail"><AiOutlineMail/></div>
        </div>
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
          {Myprojects && Myprojects.map((item) => (
            <div className="myprojectcontainer" onClick={() => (navigate(`../../desc/${item.projid}`))}>
              <div>
                <div className="projname">{item.projname}</div>
                <div className="projdesc">{item.projdesc}</div>
                <div className="createdat">1 day ago</div>
              </div>
              <>
                <button className='projdeletebtn' onClick={() => handleDeleteProject(item)}>delete</button>
              </>
            </div>
          ))}
          {!Myprojects && (
            <div className="emptyprojectcontainer">
              <h3>You have no projects at this moment.</h3>
            </div>
          )}
        </div>
        <div className="myapplications">
          <span>MY APPLICATIONS</span>
          {applications && applications.map((item) => (
            <div className="myprojectcontainer" onClick={() => (navigate(`../../desc/${item.projid}`))}>
              <div>
                <div className="projname">{item.projname}</div>
                <div className="projdesc">{item.projdesc.slice(0, 150)}</div>
                <div className="createdat">1 day ago</div>
              </div>
              <>
                <button className='projdeletebtn' onClick={() => handleDeleteApplication(item)}>delete</button>
              </>
            </div>
          ))}
          {!applications && (
            <div className="emptyprojectcontainer">
              <h4>You have no active applications at this moment.</h4>
            </div>
          )}
        </div>
        <div className="myresources">


        </div>
      </div>

    </div>
    </>
  )
}
export default Profile