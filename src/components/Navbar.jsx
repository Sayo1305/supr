import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { Navigate, useNavigate, Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import BG from "../assets/images/man.png";
import womanprofile from "../assets/images/woman.png";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase";
const Navbar = () => {
  // const [data, setdata] = useState("hello world");
  const userId = localStorage.getItem("suprUserId");
  const [user, setuser] = useState([]);
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);
  const [chooseimage, setchooseimage] = useState(false);
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);
  useEffect(() => {
    onValue(ref(db, `Users/${userId}`), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataKeys = Object.keys(data);
        let arr = [];
        for (let i = 0; i < dataKeys.length; i++) {
          arr.push(data[dataKeys[i]]);
        }
        if (arr[1] === "Male") {
          setchooseimage(true);
        }
        setuser(arr);
      }
    });
  }, []);
  const navigate = useNavigate();
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });

  return (
    // <div className="navbar">
    //   <div className="navleft">
    //     <img src={logo} alt=""/>
    //   <ul>
    //     <div className="navbar-features">
    //       <li>1:1 session</li>
    //       <li>Resources</li>
    //       <li>Contribution</li>
    //       <li on onClick={() => {navigate('/projects')}}>Projects</li>
    //     </div>
    //   </ul>
    //   </div>
    //   <div className="navright">
    //     <button id="login"  onClick={() => {
    //           navigate('/Login')
    //         }} className="btn">Login</button>
    //     <button id="signup"  onClick={() => {
    //         navigate('/Signup')
    //       }} className="btn">Signup</button>
    //   </div>
    
    <>
      {pathname.includes("login") || pathname.includes("Signup") || pathname.includes("profile") ? (
        <div style={{ display: "hidden" }}></div>
      ) : (
        <div className="navbar">
          <div className="navleft">
            <img
              onClick={() => {
                navigate("/");
              }}
              src={logo}
              alt=""
            />
            <ul>
              <div className="navbar-features">
                <li onClick={()=>{
                  navigate('/Mentors');
                }}>1:1 session</li>
                <li
                  onClick={() => {
                    navigate("/Resources");
                  }}
                >
                  Resources
                </li>
                <li>Contribution</li>
                <Link to={"/projects"}>
                  <li>Projects</li>
                </Link>
              </div>
            </ul>
          </div>
          <div className="navright">
            {!userId && (
              <>
                <button
                  id="login"
                  onClick={() => {
                    navigate("/Login");
                  }}
                  className="btn"
                >
                  Login
                </button>
                <button
                  id="signup"
                  onClick={() => {
                    navigate("/Signup");
                  }}
                  className="btn"
                >
                  Signup
                </button>
              </>
            )}
            {userId && (
              <>
                <div className="NavbarProfileText">Hi!! {user[3]}</div>
                {chooseimage === false ? (
                  <img
                  onClick={()=>{navigate('/profile')}}
                    className="NavbarProfile"
                    src={womanprofile}
                    alt="profile"
                  />
                ) : (
                  <img onClick={()=>{navigate('/profile')}} className="NavbarProfile" src={BG} alt="profile" />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
