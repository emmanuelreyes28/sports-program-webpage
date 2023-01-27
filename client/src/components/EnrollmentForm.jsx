import React, { useState, useCallback } from "react";
import SignUpForm from "./SignUpForm";
import ParentInfo from "./ParentInfo";

function EnrollmentForm() {
  const [enrollmentInfo, setEnrollmentInfo] = useState({});

  // useCallback hook in the parent component and pass the handlePlayerChange function
  // to the child component as a prop.
  const handlePlayerChange = useCallback((newInfo) => {
    setEnrollmentInfo((prevInfo) => {
      return {
        ...prevInfo,
        ...newInfo,
      };
    });
  }, []);

  // when a change occurs in parent info component this callback function is triggered
  // through the prop and merges existing info from enrollmentInfo
  const handleParentChange = useCallback((newInfo) => {
    setEnrollmentInfo((prevInfo) => {
      return {
        ...prevInfo,
        ...newInfo, //use spread operator here to merge info to state object rather than overwriting
      };
    });
  }, []);

  function submitEnrollment(event) {
    console.log(enrollmentInfo);
    event.preventDefault();
  }

  return (
    <div className="sign-up-form">
      <div>
        <SignUpForm handleData={handlePlayerChange} />
        <ParentInfo handleData={handleParentChange} />
        <div className="row g-3">
          <div class="col-12">
            <button
              onClick={submitEnrollment}
              // type="submit"
              class="btn btn-primary"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentForm;
