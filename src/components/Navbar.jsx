import React, { useState } from "react";
import "../assets/css/nav.css";
import BG from "../assets/images/kuchbhi.jpg";
import { useNavigate } from "react-router-dom";
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
      <ul>
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
          <li id="signup">Sign up</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
