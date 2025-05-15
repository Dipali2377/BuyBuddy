import React from "react";
import "../Pages/CSS/LoginSignup.css";
const LoginSignup = () => {
  return (
    <>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" name="" id="" placeholder="Your name" />
            <input type="email" name="" id="" placeholder="Email Address" />
            <input type="password" name="" id="" placeholder="Password" />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have and account? <span>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing I agree to the terms of use & privacy policy </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
