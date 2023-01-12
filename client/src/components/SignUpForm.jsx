import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";

import "react-datepicker/dist/react-datepicker.css";

function SignUpForm() {
  const [birthDate, setBirthDate] = useState(new Date());

  // need to figure out how to update state on select dropdown items

  // useState object to store playerInfo
  const [player, setPlayer] = useState({
    fName: "",
    lName: "",
    birthDate: "",
    gender: "",
    age: "",
    jerseySize: "",
    sessionTime: "",
  });

  //use object desctructuring to update player info
  function handleChange(event) {
    const { name, value } = event.target;

    setPlayer((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  console.log(player);

  return (
    <div className="sign-up-form">
      <form class="row g-3">
        {/* First Row */}
        <div className="row g-3">
          <div class="col-md-4">
            <label for="playerFirstName" class="form-label">
              Player's First Name <span className="requiredAsterisk">*</span>
            </label>
            <input
              onChange={handleChange}
              name="fName"
              value={player.fName}
              type="text"
              class="form-control"
              id="playerFirstName"
            />
          </div>
          <div class="col-md-4">
            <label for="playerLastName" class="form-label">
              Player's Last Name <span className="requiredAsterisk">*</span>
            </label>
            <input
              onChange={handleChange}
              name="lName"
              value={player.lName}
              type="text"
              class="form-control"
              id="playerLastName"
            />
          </div>
          <div class="col-md-4">
            <label for="playerBirthDate" class="form-label">
              Player's Birth Date <FaRegCalendarAlt />{" "}
              <span className="requiredAsterisk">*</span>
            </label>
            {/* <input type="text" class="form-control" id="playerBirthDate" /> */}
            <DatePicker
              selected={birthDate}
              onChange={(date: Date) => setBirthDate(date)}
              // onChange={handleChange}
              // name="birthDate"
              // value={player.birthDate}
            />
          </div>
        </div>
        {/* Second Row  */}
        <div className="row g-3">
          {/* <label for="playerGender">
            Gender <span className="requiredAsterisk">*</span>
          </label> */}
          <div class="col-4">
            <select class="form-select">
              <option selected>Gender</option>
              <option value="1">Boy</option>
              <option value="2">Girl</option>
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
            <label>Jersey Size</label>
            <select
              onChange={handleChange}
              name="jerseySize"
              class="form-select"
            >
              {/* <option selected>Jersey Size</option> */}
              <option value={player.jerseySize}>YXS</option>
              <option value="2">YS</option>
              <option value="3">YM</option>
              <option value="4">YL</option>
              <option value="5">YXL</option>
            </select>
          </div>
        </div>
        {/* Third Row */}
        <div className="row g-3">
          <div class="col-12">
            <select class="form-select">
              <option selected>Session Time</option>
              <option value="1">Tuesday 6-6:50pm</option>
              <option value="2">Thursday 5-5:50pm</option>
            </select>
          </div>
        </div>
        {/* Fourth Row */}
        <div class="col-md-4">
          <label for="parentFirstName" class="form-label">
            Parent/Gaurdian First Name
            <span className="requiredAsterisk">*</span>
          </label>
          <input type="text" class="form-control" id="parentFirstName" />
        </div>
        <div class="col-md-4">
          <label for="parentLastName" class="form-label">
            Parent/Gaurdian Last Name{" "}
            <span className="requiredAsterisk">*</span>
          </label>
          <input type="text" class="form-control" id="parentLastName" />
        </div>
        <div class="col-md-4">
          <label for="parentPhoneNumber" class="form-label">
            Parent/Gaurdian Phone Number
            <span className="requiredAsterisk">*</span>
          </label>
          <input
            type="tel"
            class="form-control"
            id="parentPhoneNumber"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
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
