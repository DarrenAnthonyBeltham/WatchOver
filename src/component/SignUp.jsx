import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-header">
          <div className="active" id="signup-tab">
            Sign Up
          </div>
          <div id="login-tab">Login</div>
        </div>
        <form className="signup-form">
          <h2 className="fw-bold text-center">Sign Up Now!</h2>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-dark w-75">
              Sign Up
            </button>
          </div>

          <p className="termsandcondition text-justify mt-3">
            By registering, you agree that you have read and accepted our Terms
            and Conditions. Please see our Privacy Policy for information about
            how we process your data.
          </p>
          <div className="or-separator">
            <span>Or</span>
          </div>
          <button className="btn btn-light btn-social">
            <i className="fab fa-google"></i> Sign up with Google
          </button>
          <button className="btn btn-light btn-social">
            <i className="fab fa-facebook"></i> Sign up with Facebook
          </button>
          <p className="text-center mt-3">
            Already Signed Up? <a href="#">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
