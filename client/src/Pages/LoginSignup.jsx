import React, { useState } from "react";
import "../Pages/CSS/LoginSignup.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("SignUp");
  const [formdata, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const signup = async () => {
    // console.log("signup function executed", formdata);

    try {
      let responseData = await axios.post(
        `http://localhost:5000/user/signup`,
        formdata
      );

      if (responseData && responseData.data) {
        localStorage.setItem("email", formdata.email);
        localStorage.setItem("password", formdata.password);

        toast.success("SignUp successful! You can login now");
        setState("Login");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message); // shows "User already exists"
      } else {
        toast.error("Signup failed. Please try again");
      }
      console.log("Signup error", error);
    }
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email: formdata.email,
        password: formdata.password,
      });

      if (response && response.data && response.data.token) {
        localStorage.setItem("Ecom-token", response.data.token);

        toast.success("Login successful!");
        navigate("/");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Login failed. Please try again");
      }
      console.error("Login error", error);
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-fields">
            {state === "SignUp" ? (
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={changeHandler}
                id=""
                placeholder="Your name"
              />
            ) : (
              <></>
            )}
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={changeHandler}
              id=""
              placeholder="Email Address"
            />
            <input
              type="password"
              name="password"
              value={formdata.password}
              onChange={changeHandler}
              id=""
              placeholder="Password"
            />
          </div>
          <button
            onClick={() => {
              state === "Login" ? login() : signup();
            }}
          >
            Continue
          </button>

          {state === "SignUp" ? (
            <p className="loginsignup-login">
              Already have and account?{" "}
              <span
                onClick={() => {
                  setState("Login");
                }}
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="loginsignup-login">
              Create an account?{" "}
              <span
                onClick={() => {
                  setState("SignUp");
                }}
              >
                Click here
              </span>
            </p>
          )}

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
