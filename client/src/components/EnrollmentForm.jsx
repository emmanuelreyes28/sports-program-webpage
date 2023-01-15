import React from "react";
import SignUpForm from "./SignUpForm";
import ParentInfo from "./ParentInfo";

function EnrollmentForm() {
  return (
    <div className="sign-up-form">
      <form>
        <SignUpForm />
        <ParentInfo />
        <div className="row g-3">
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EnrollmentForm;
