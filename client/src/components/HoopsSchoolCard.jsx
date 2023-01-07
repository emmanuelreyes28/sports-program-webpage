import React from "react";

function HoopsSchoolCard() {
  return (
    <div className="card h-100 border border-3 border-primary rounded hoops-school-card">
      <img
        src="https://bballershoopsroswell.com/wp-content/uploads/bb-plugin/cache/3a_5v_girl-square-square.webp"
        alt="Shooting Basketball"
      />
      <div className="card-body">
        <h5 className="card-title">Hoops School</h5>
        <p className="card-text">
          TUESDAYS & THURSDAYS
          <br />
          Ages 7-11
        </p>
        <a href="#" className="btn btn-primary">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default HoopsSchoolCard;
