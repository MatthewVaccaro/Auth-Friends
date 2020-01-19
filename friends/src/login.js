import React, { useState } from "react";
import axiosWithAuth from "./utils/axiosWithAuth";
import "./App.css";

function Login() {
  const [inputField, setInputField] = useState({
    username: "",
    password: ""
  });

  //   const login = localStorage.getItem("token")

  const changeHandler = event => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("api/login", inputField)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        console.log(res.data.payload);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div className="bar"></div>
        <input
          type="text"
          name="username"
          value={inputField.username}
          onChange={changeHandler}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={inputField.password}
          onChange={changeHandler}
          placeholder="Password"
        />
        <button type="submit">Login In</button>
      </form>
    </div>
  );
}

export default Login;
