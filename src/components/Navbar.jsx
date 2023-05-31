import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Navigate, useNavigate, Link} from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const [data, setdata] = useState("hello world");
  const navigate = useNavigate();
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  })
  
  return (
    <div className="navbar">
      <div className="navleft">
        <img src={logo} alt=""/>
      <ul>
        <div className="navbar-features">
          <li>1:1 session</li>
          <li>Resources</li>
          <li>Contribution</li>
          <li on onClick={() => {navigate('/projects')}}>Projects</li>
        </div>
      </ul>
      </div>
      <div className="navright">
        <button id="login"  onClick={() => {
              navigate('/Login')
            }} className="btn">Login</button>
        <button id="signup"  onClick={() => {
            navigate('/Signup')
          }} className="btn">Signup</button>
      </div>
      {/* <ul>
        <div className="navbar-features">
          <li>One on one session</li>
          <li>Contribution</li>
          <li>Projects</li>
        </div>
        <div className="navbar-user">
          <li
            id="login"
            onClick={() => {
              navigate('/Login')
            }}
          >
            Login
          </li>
          <li id="signup"
          onClick={() => {
            navigate('/Signup')
          }}
          >Sign up</li>
        </div>
      </ul>  */}
    </div> 
  );
};

export default Navbar;
