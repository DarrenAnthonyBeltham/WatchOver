import React from 'react';
import './Login.css';
import Header from './Header';

const Login = () => {
    return (
        <div className="container">
        <div className="form-container">
          <div className="form-header">
          <div id="signup-tab">Sign Up</div>
            <div className="active" id="login-tab">
              Login
            </div>
          </div>
          <form className="login-form">
            <h2 className="fw-bold text-center">Login</h2>
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
                Login
              </button>
            </div>
  
            <p className="termsandcondition text-justify mt-3">
            By logging in, you agree to the Terms of Service and Privacy Policy.
            </p>
            <div className="or-separator">
              <span>Or</span>
            </div>
            <button className="btn btn-light btn-social">
              <i className="fab fa-google"></i> Login with Google
            </button>
            <button className="btn btn-light btn-social">
              <i className="fab fa-facebook"></i> Login with Facebook
            </button>
            <p className="text-center mt-3">
            Don't have an account yet? <a href="#"> Sign Up </a>
            </p>
          </form>
        </div>
      </div>
    );
  }

export default Login;
