import React from "react";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="https://bballershoopsroswell.com/wp-content/uploads/2022/10/BBallersHoops_logo_roswell-CLR-1.png"
            alt="B-Ballers Hoops Roswell Logo"
          />
        </a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              Features
            </a>
            <a class="nav-link" href="#">
              Pricing
            </a>
            <a class="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
