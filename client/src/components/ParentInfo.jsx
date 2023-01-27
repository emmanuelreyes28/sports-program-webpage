import React, { useState } from "react";

function ParentInfo(props) {
  const [parent, setParent] = useState({
    parentFirstName: "",
    parentLastName: "",
    phone: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setParent((prevValue) => {
      props.handleData({ ...prevValue, [name]: value });
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <div className="row g-3">
        <div class="col-md-4">
          <label for="parentFirstName" class="form-label">
            Parent/Gaurdian First Name
          </label>
          <input
            onChange={handleChange}
            name="parentFirstName"
            value={parent.parentFirstName}
            type="text"
            class="form-control"
            id="parentFirstName"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="parentLastName" class="form-label">
            Parent/Gaurdian Last Name{" "}
          </label>
          <input
            onChange={handleChange}
            name="parentLastName"
            value={parent.parentLastName}
            type="text"
            class="form-control"
            id="parentLastName"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="parentPhoneNumber" class="form-label">
            Parent/Gaurdian Phone Number
          </label>
          <input
            onChange={handleChange}
            name="phone"
            value={parent.phone}
            type="tel"
            class="form-control"
            id="parentPhoneNumber"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <div className="row g-3">
          <div class="col-md-12">
            <label for="parentEmail" class="form-label">
              Parent/Gaurdian Email
            </label>
            <input
              onChange={handleChange}
              name="email"
              value={parent.email}
              type="email"
              class="form-control"
              id="parentEmail"
              required
            />
          </div>
        </div>
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
        {/* <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default ParentInfo;
