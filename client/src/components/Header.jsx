import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://bballershoopsroswell.com/wp-content/uploads/2022/10/BBallersHoops_logo_roswell-CLR-1.png"
            alt="B-Ballers Hoops Roswell Logo"
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
