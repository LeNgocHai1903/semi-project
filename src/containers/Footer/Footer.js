import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterContent">
        <p> 2019 Uber Technologies Inc. All Rights Reserved.</p>
        <p>Terms of use / Legal Notice / Privacy & Security</p>
      </div>
      <div className="FooterSelection">
        <i className="fa fa-facebook-square fa-2x" id="facebook"></i>
        <i className="fa fa-youtube-square fa-2x" id ="youtube"></i>
        <i className="fa fa-linkedin-square fa-2x" id="linkedin"></i>
      </div>
    </footer>
  );
};

export default Footer;
