import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./curtainMenu.css";
import {IoMdClose} from 'react-icons/io';


export default function CurtainMenu() {
  const [toggleNav, setToggleNav] = useState(false);

  const [checkWidth, setCheckWidth] = useState(window.innerWidth);

  const checkFunction = () => {
    console.log(checkWidth);
    setCheckWidth(window.innerWidth);
};

useEffect(() => {
  window.addEventListener("resize", checkFunction);

    return () => {
      window.removeEventListener("resize", checkFunction);
    };
  }, []);

  const toggleNavFunc = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      {checkWidth < 900 && (
        <button onClick={toggleNavFunc} className="floating-btn">
            
        </button>
      )}

      <nav className={toggleNav ? "active" : ""}>

        {checkWidth < 900 && (
          <button 
          onClick={toggleNavFunc} className="close-curtain">
            <IoMdClose className='text-[#9e9e9e]'/>
          </button>
        )}

        <Link to="/home"><a href="">Home</a></Link>
        <Link to="/search"><a href="">Search</a></Link>
        <Link to="/schedule"><a href="">My Schedule</a></Link>
        <Link to="/login"><a href="">Log in</a></Link>
      </nav>
    </>
  );
}