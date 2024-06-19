import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"; // Create this CSS file to apply the custom styles

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar-brand text-white ms-4" href="#">
        WatchOver
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Discussion
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <span className="navbar-text text-white">
          <a className="navbar-icon text-white me-5" href="#">
            <i className="fa fa-user fa-2x"></i>
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Header;
