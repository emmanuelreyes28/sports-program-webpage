import React from "react";

function SignUpForm() {
  return (
    <div className="sign-up-form">
      <form class="row g-3">
        {/* First Row */}
        <div className="row g-3">
          <div class="col-md-4">
            <label for="playerFirstName" class="form-label">
              Player's First Name
            </label>
            <input type="email" class="form-control" id="playerFirstName" />
          </div>
          <div class="col-md-4">
            <label for="playerLastName" class="form-label">
              Player's Last Name
            </label>
            <input type="text" class="form-control" id="playerLastName" />
          </div>
          <div class="col-md-4">
            <label for="playerBirthDate" class="form-label">
              Player's Birth Date
            </label>
            {/* <input type="text" class="form-control" id="playerBirthDate" /> */}
            <div class="input-group date" id="datepicker">
              <input type="text" class="form-control" id="date" />
              <span class="input-group-append">
                <span class="input-group-text bg-light d-block">
                  {/* <i class="fa fa-calendar"></i> */}
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* Second Row  */}
        <div className="row g-3">
          <div class="col-4">
            <select class="form-select">
              <option selected>Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
          <div class="col-4">
            <select class="form-select">
              <option selected>Age</option>
              <option value="1">5</option>
              <option value="2">6</option>
            </select>
          </div>
          <div class="col-4">
            <select class="form-select">
              <option selected>Jersey Size</option>
              <option value="1">Small</option>
              <option value="2">Medium</option>
              <option value="3">Large</option>
            </select>
          </div>
        </div>
        {/* Third Row */}
        <div className="row g-3">
          <div class="col-12">
            <select class="form-select">
              <option selected>Session Time</option>
              <option value="1">Tuesday</option>
              <option value="2">Thursday</option>
            </select>
          </div>
        </div>
        {/* Fourth Row */}
        <div class="col-md-4">
          <label for="parentFirstName" class="form-label">
            Parent/Gaurdian First Name
          </label>
          <input type="text" class="form-control" id="parentFirstName" />
        </div>
        <div class="col-md-4">
          <label for="parentLastName" class="form-label">
            Parent/Gaurdian Last Name
          </label>
          <input type="text" class="form-control" id="parentLastName" />
        </div>
        <div class="col-md-4">
          <label for="parentPhoneNumber" class="form-label">
            Parent/Gaurdian Phone Number
          </label>
          <input type="text" class="form-control" id="parentPhoneNumber" />
        </div>
        {/* Fifth Row */}
        <div className="row g-3">
          <div class="col-md-12">
            <label for="parentEmail" class="form-label">
              Parent/Gaurdian Email
            </label>
            <input type="email" class="form-control" id="parentEmail" />
          </div>
        </div>
        {/* Sixth Row */}
        <div className="row g-3">
          <div className="col-12"></div>
          DISCLAIMER HERE
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              I acknowledge
            </label>
          </div>
        </div>
        <div className="row g-3"></div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
