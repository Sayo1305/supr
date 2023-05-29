import React from 'react';
import '../assets/css/signup.css';
import {Link} from "react-router-dom";

const Signup = () => {
  return (
    <div className="signupContainer">
        <div className="signupBox">
        <div className="welcome">
          WELCOME
        </div>
        <div className="inputContainer">
          <input type="text" placeholder="First Name" className="box"/>
          <input type="text" placeholder="Last Name" className="box"/>
          <input type="text" placeholder="Email" className="box"/>
          <input type="password" placeholder="Password" className="box"/>
        </div>
        <div className="buttonContainerSignup">
          <button content="Login" className="btn2">Signup</button>
        </div>
        <div className="alreadyAccount">
          <p>Already have a account? <Link to={'/login'} className='loggedin'>Login</Link></p>
          
        </div>
        </div>
    </div>
  )
}

export default Signup
