import React, { useState } from "react";

function SignUpForm(props) {
  // useState object to store playerInfo
  const [player, setPlayer] = useState({
    fName: "",
    lName: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    gender: "",
    age: "",
    jerseySize: "",
    sessionTime: "",
  });

  //use object desctructuring to update player info
  function handleChange(event) {
    const { name, value } = event.target;
    setPlayer((prevValue) => {
      props.handleData({ ...prevValue, [name]: value });
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <div class="row g-3">
        {/* First Row */}
        <div className="row g-3">
          <div class="col-md-4">
            <label for="playerFirstName" class="form-label">
              Player's First Name
            </label>
            <input
              onChange={handleChange}
              name="fName"
              value={player.fName}
              type="text"
              class="form-control"
              id="playerFirstName"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="playerLastName" class="form-label">
              Player's Last Name
            </label>
            <input
              onChange={handleChange}
              name="lName"
              value={player.lName}
              type="text"
              class="form-control"
              id="playerLastName"
              required
            />
          </div>
          <div class="col-md-4">
            <label for="playerBirthDate" class="form-label">
              Player's Birth Date
            </label>
            <div className="row">
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  name="birthMonth"
                  value={player.birthMonth}
                  type="text"
                  class="form-control"
                  id="birthMonth"
                  placeholder="Month"
                  pattern="[0-9]{2}"
                  minLength="2"
                  maxLength="2"
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  name="birthDay"
                  value={player.birthDay}
                  type="text"
                  class="form-control"
                  id="birthDay"
                  placeholder="Day"
                  pattern="[0-9]{2}"
                  minLength="2"
                  maxLength="2"
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  onChange={handleChange}
                  name="birthYear"
                  value={player.birthYear}
                  type="text"
                  class="form-control"
                  id="birthYear"
                  placeholder="Year"
                  pattern="[0-9]{4}"
                  minLength="4"
                  maxLength="4"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        {/* Second Row  */}
        <div className="row g-3">
          <div class="col-4">
            <select
              onChange={handleChange}
              name="gender"
              class="form-select"
              required
            >
              <option value="" disabled selected>
                Gender
              </option>
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
            </select>
          </div>
          <div class="col-4">
            <select
              onChange={handleChange}
              name="age"
              class="form-select"
              required
            >
              <option value="" disabled selected>
                Age
              </option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
            </select>
          </div>
          <div class="col-4">
            <select
              onChange={handleChange}
              name="jerseySize"
              class="form-select"
              required
            >
              <option value="" disabled selected>
                Jersey Size
              </option>
              <option value="YSX">YXS</option>
              <option value="YS">YS</option>
              <option value="YM">YM</option>
              <option value="YL">YL</option>
              <option value="YXL">YXL</option>
            </select>
          </div>
        </div>
        {/* Third Row */}
        <div className="row g-3">
          <div class="col-12">
            <select
              onChange={handleChange}
              name="sessionTime"
              class="form-select"
              required
            >
              <option value="" disabled selected>
                Session Time
              </option>
              <option value="Tuesday">Tuesday 6-6:50pm</option>
              <option value="Thursday">Thursday 5-5:50pm</option>
            </select>
          </div>
        </div>
        <div className="row g-3"></div>
      </div>
    </div>
  );
}

export default SignUpForm;
