import React from "react";

function SimpleNavbar() {
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex ">
        <div className="div justify-content-start ">

          <a className="navbar-brand" href="#">Start Bootstraps</a>
        </div>
        <div className="div justify-content-start" id="navbarText">
          <ul className="navbar-nav d-flex">
            <li className="nav-item ml-auto">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item ml-auto">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>`
    </nav>
  );
};

export default SimpleNavbar