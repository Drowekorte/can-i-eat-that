import React from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const LoginSignup = () => {
  return (
    <div>
      <div className="container">
        <div className="halfsies">
          <Login />
        </div>
        <div className="halfsies">
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
