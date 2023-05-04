import React from "react";
<<<<<<< HEAD
=======
import logo from "../images/layout/BottieLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
>>>>>>> main

//Import photos
import logo from "../Bottie logo (1).png";
import commentIcon from "./comment_icon.png";
import plantIcon from "./plant_icon.png";

//import FontawesomeIcons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

export default function Header() {
<<<<<<< HEAD

  const className = "scroll";
  const scrollTrigger = 60;
  
  window.onscroll = function() {
    // We add pageYOffset for compatibility with IE.
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
      document.getElementsByTagName("header")[0].classList.add(className);
    } else {
      document.getElementsByTagName("header")[0].classList.remove(className);
    }
  };


  return (
      <header>
        <div className="nav-container">
          <a href="/">
            <img src={logo} alt="Bottie Logo" className="logo" />
          </a>
          <nav className="nav">
            <a className="nav-link" aria-current="page" href="/">
              Get Started with Bottie
              <img src={commentIcon} alt="Comment Icon" className="nav-icon" />
            </a>
            <a className="nav-link" href="/products">
              All Plants
              <img src={plantIcon} alt="Plant Icon" className="nav-icon" />
            </a>
          </nav>
          <div className="user-icons">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <FontAwesomeIcon className="icon" icon={faCartShopping} />
          </div>
        </div>
      </header>
=======
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Bottie Logo" className="logo" href="/" />
      </a>
      <nav className="nav">
        <a className="nav-link active" aria-current="page" href="/">Get Started with Bottie</a>
        <a classNam="nav-link" href="/products">All Plants</a>
      </nav>
      <div className="nav-icons">
        <FontAwesomeIcon className="icon" icon={faUser} />
        <FontAwesomeIcon className="icon" icon={faCartShopping} />
      </div>
    </header>
>>>>>>> main
  );
}
