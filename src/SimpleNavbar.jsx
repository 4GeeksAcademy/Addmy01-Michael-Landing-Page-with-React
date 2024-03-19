import React from "react";

function SimpleNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Services</a>
              <a className="nav-link" href="#">Contact</a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SimpleNavbar;
