import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let history = useNavigate();
  return (
    <div>
      <p>login</p>
      <button
        onClick={() => {
          history("/");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
