import React from "react";

function Coaches() {
  return (
    <div className="container text-center coaches-div">
      <h2>MEET THE COACHES</h2>
      <div className="row coach-row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <img
                className="coach-img"
                src="https://bballershoopsroswell.com/wp-content/uploads/2022/08/Coach-Kevin-768x1024.jpg"
                alt="Coach Kevin"
              />
            </div>
            <div className="col-6 text-start coach-description">
              <h3>Coach Kevin</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <img
                className="coach-img"
                src="https://bballershoopsroswell.com/wp-content/uploads/2022/08/Coach-Jessica-768x1024.jpg"
                alt="Coach Jessica"
              />
            </div>
            <div className="col-6 text-start">
              <h3>Coach Jessica</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coaches;
