import React from "react";
import "./Home.css";
import HomeCoverPic from "../../shared/images/homeCover.png";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="Home">
      <img alt="home cover pic" src={HomeCoverPic} />
      <h1>Your drive, On demand</h1>
      <p>
        whether you're headed to work, the airport, or out on the town. Uber
        connects you with a reliable ride in minutes One tap and a car come
        directly to you.
      </p>
      <Link to="/register">
        <button className="btn btn-dark" type="button">
          Register with phone<i className="fa fa-arrow-right"></i>
        </button>
      </Link>
    </div>
  );
};

export default Home;
