import React from "react";
import HoopsSchoolCard from "./HoopsSchoolCard";
import LilBallersCard from "./LilBallersCard";
import LilBallersLeagueCard from "./LilBallersLeagueCard";

function Programs() {
  return (
    // add class for row and cols to five card comp spacing
    <div class="container">
      <h1>PROGRAMS</h1>
      <div className="div-programs">
        <HoopsSchoolCard />
        <LilBallersCard />
        <LilBallersLeagueCard />
      </div>
    </div>
  );
}

export default Programs;
