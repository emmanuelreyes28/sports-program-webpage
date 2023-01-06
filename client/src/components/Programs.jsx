import React from "react";
import HoopsSchoolCard from "./HoopsSchoolCard";
import LilBallersCard from "./LilBallersCard";
import LilBallersLeagueCard from "./LilBallersLeagueCard";

function Programs() {
  return (
    <div className="container programs-div">
      <h2 className="programs-header">PROGRAMS</h2>
      <div className="card-group">
        <HoopsSchoolCard />
        <LilBallersCard />
        <LilBallersLeagueCard />
      </div>
    </div>
  );
}

export default Programs;
