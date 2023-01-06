import React from "react";

function LilBallersCard() {
  return (
    <div class="card h-100 border border-3 border-primary rounded lil-ballers-card">
      <img
        src="https://bballershoopsroswell.com/wp-content/uploads/bb-plugin/cache/3b_2-boys_dribbling-square-square.webp"
        alt="Lil Baller Bouncing Ball"
      />
      <div class="card-body">
        <h5 class="card-title">Lil Ballers</h5>
        <p class="card-text">
          TUESDAYS & THURSDAYS
          <br />
          Ages 3-4 & 5-6
        </p>
        <a href="#" class="btn btn-primary">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default LilBallersCard;
