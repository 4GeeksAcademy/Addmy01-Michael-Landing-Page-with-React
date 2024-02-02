import React from "react";
import "./styles/index.css";
import style from "./styles/index.css"
function SimpleNavbar() {
    
    return (
      <div className="container-fluid bg-dark">
        <nav className="container navbar navbar-expand-lg navbar-light d-flex justify-content-between">          
          <div className="container">
            <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className="collapse navbar-collapse " id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white active " href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-white" href="#">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-white" href="#">Contact</a>
                </li> 
              </ul>
              
            </div>
        </nav>
      </div>


    );
};

export default SimpleNavbar