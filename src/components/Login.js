import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  let navigate = useNavigate();

  const login = async () => {
    const data = { username: username, password: password };
    await axios
      .post("http://localhost:3001/auth/login", data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          console.log(response);
          localStorage.setItem("accessToken", response.data.token);
          setAuthState(() => {
            return {
              username: response.data.username,
              id: response.data.id,
              status: true,
            };
          });

          navigate("/");
        }
      });
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <label>Username: </label>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login </button>
      </div>
    </div>
  );
};

export default Login;
