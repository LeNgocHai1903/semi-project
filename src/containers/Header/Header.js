import React from "react";
import "./Header.css";
import Logo from "../../shared/images/uberLogo.jpg";
import UberText from '../../shared/images/uberText.png'

const Header = () => {

  const onChangehanler = () => {
    window.location.href = "/"
  }
  return (
    <header className="Header">
      <div className="Logo" onClick={onChangehanler}>
        <img className="UberLogo" alt="uberLogo" src={Logo}  />
        <img className="UberText" alt="uberText" src ={UberText}/>
      </div>
      <div>
        <i className="fa fa-bars fa-lg" id="BarIcon"></i>
      </div>
    </header>
  );
};

export default Header;
