import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import chifHate from '../../img/chef-hat.png'

const Header = () => {
  return (
    <>
    <header className="navigation-parent">
      <div className="navigation-parent">
        <div>
          <marquee className="nav-animated-text"> Special Offer</marquee>
        </div>
        <div className="header-2">
          <h4>Al-Eiman <br/> Royal <br/> Restaurant</h4>
          <img  className='logo' src={chifHate}></img>
        </div>
        <nav className="navigationbar">
          <Link to="/Home">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Menu</Link>
          <Link to="#">Special</Link>
          <Link to="#">Contacts</Link>
        </nav> 
      </div> 
    </header> 

  </>
  );
};

export default Header;