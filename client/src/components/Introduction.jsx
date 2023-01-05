import React from "react";

function Introduction() {
  return (
    <div class="container intro-container">
      <div class="row">
        <div class="col">
          <div className="intro-title">
            <h1>
              <span>
                B•BALLERS HOOPS
                <br />
                ROSWELL, GA
              </span>
            </h1>
          </div>
          <div className="intro-p">
            <p>
              Roswell’s premier youth basketball program is here! We have
              spring, summer, fall, and winter basketball camps to choose from
              for both boys and girls. Come see us at the Roswell Presbyterian
              Church Gym at 755 Mimosa Blvd., Roswell, GA.
            </p>
            <p>
              B•Ballers Hoops Roswell is a youth recreation program that focuses
              on fundamentals. Each month, kids tip-off in 4 sessions learning
              and enhancing their basketball skills. We offer non-competitive
              player development sessions, camps, and youth basketball leagues
              for ages 3–11 that will bring confidence-building methods to your
              player. We are partners with our community in Roswell, Marietta,
              and local elementary schools, including Sweet Apple Elementary and
              Vickery Mill Elementary.
            </p>
          </div>
        </div>
        <div class="col">
          <div className="intro-img-container">
            <img
              className="intro-img"
              src="https://bballershoopsroswell.com/wp-content/uploads/bb-plugin/cache/2_Hands-in-square-square.webp"
              alt="Lil Ballers Team Huddle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
