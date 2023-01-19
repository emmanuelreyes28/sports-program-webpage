import React, { useState, useCallback } from "react";
import SignUpForm from "./SignUpForm";
import ParentInfo from "./ParentInfo";

function EnrollmentForm() {
  const [enrollmentInfo, setEnrollmentInfo] = useState({});

  // function handlePlayerChange(newInfo) {
  //   setEnrollmentInfo((prevInfo) => {
  //     return {
  //       ...prevInfo,
  //       newInfo,
  //     };
  //   });
  // }

  // useCallback hook in the parent component and pass the handlePlayerChange function
  // to the child component as a prop.
  const handlePlayerChange = useCallback((newInfo) => {
    setEnrollmentInfo((prevInfo) => {
      return {
        ...prevInfo,
        newInfo,
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
        {/* <ParentInfo /> */}
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
