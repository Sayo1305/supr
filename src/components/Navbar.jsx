import React, { useState } from "react";
import "../assets/css/nav.css";
import BG from "../assets/images/kuchbhi.jpg";
const Navbar = () => {
  const [data, setdata] = useState("hello world");

  return (
    <div>
      <img src={BG} alt="" />
      <p
        onClick={
            () => {
          setdata("hellodjdoijdij");
        }}
      >
        {data}
      </p>
    </div>
  );
};

export default Navbar;
