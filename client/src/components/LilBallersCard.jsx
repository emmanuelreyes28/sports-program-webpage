import React from "react";

function LilBallersCard() {
  return (
    <div className="card h-100 border border-3 border-primary rounded lil-ballers-card">
      <img
        src="https://bballershoopsroswell.com/wp-content/uploads/bb-plugin/cache/3b_2-boys_dribbling-square-square.webp"
        alt="Lil Baller Bouncing Ball"
      />
      <div className="card-body">
        <h5 className="card-title">Lil Ballers</h5>
        <p className="card-text">
          TUESDAYS & THURSDAYS
          <br />
          Ages 3-4 & 5-6
        </p>
        <a href="#" className="btn btn-primary">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default LilBallersCard;
