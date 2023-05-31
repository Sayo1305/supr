import React from 'react';
import "../assets/css/login.css"
import { FaFacebookF,FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Login() {

  const FaceBookBackground ="linear-gradient(to right, #0546a0 0%, #663fbg 100%)";
  const InstagramBackground ="linear-gradient(to right, #a12ac4 0%, #ed586c 40%, #f0a853 100%)";
  const TwitterBackground ="linear-gradient(to right, #56c1e1 0%, #35a9ce 50%)";
  const GoogleBackground ="linear-gradient(to right, #56c1e1 0%, #35a9ce 50%)";

  return (
    <div className="loginContainer">
       <div className="loginBox">
        <div className="welcome">
          WELCOME BACK
        </div>
        <div className="inputContainer">
          <input type="text" placeholder="Email" className="box"/>
          <input type="password" placeholder="Password" className="box"/>
        </div>
        <div className="buttonContainer">
          <button content="Login" className="btn1">Login</button>
        </div>
        <div className="loginwith">
          <h5>Or Login With</h5>
        </div>
        <div className="horizontalRule">
        <hr/>
        </div>
         <div className="iconsContainer">
          <icon color={FaceBookBackground} className="icn">
            <FaFacebookF/>
          </icon>
          <icon color={InstagramBackground} className="icn">
            <FaInstagram/>
          </icon>
          <icon color={TwitterBackground} className="icn">
            <FaTwitter/>
          </icon>
          <icon color={GoogleBackground} className="icn">
            <FaGoogle/>
          </icon>
          </div> 
      
       <div className="forgotPassword">
        <h6>Forgot Password ?</h6>
       </div>
       </div> 
    </div>
  )
}

export default Login
