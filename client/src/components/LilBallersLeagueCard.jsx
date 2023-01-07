import React from "react";

function LilBallersLeagueCard() {
  return (
    <div className="card h-100 border border-3 border-primary rounded lil-ballers-league-card">
      <img
        src="https://bballershoopsroswell.com/wp-content/uploads/bb-plugin/cache/IMG-2068-square-square.webp"
        alt="Lil Baller aiming for the basket"
      />
      <div className="card-body">
        <h5 className="card-title">Lil Ballers League</h5>
        <p className="card-text">
          COMING: FEB 2023
          <br />
          Ages 7-10
        </p>
        <a href="#" className="btn btn-primary">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default LilBallersLeagueCard;
