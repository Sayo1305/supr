import React, { useState } from "react";
import "../assets/css/nav.css";
import BG from "../assets/images/kuchbhi.jpg";
const Navbar = () => {
  const [data, setdata] = useState("hello world");

  return (
    <div className="navbar">
      <ul>
        <div className="navbar-features">
          <li>One on one session</li>
          <li>Contribution</li>
          <li>Projects</li>
        </div>
        <div className="navbar-user">
          <li id="login">Login</li>
          <li id="signup">Sign up</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
