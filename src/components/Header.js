import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";

const Header = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  let navigate = useNavigate();
  return (
    <header>
      <div className="logo"></div>
      <div className="title">
        <Link to="/">
          <h1>Akatsuki</h1>
        </Link>
        <div className="navbar">
          {!authState.username ? (
            <>
              <Link to="/login">
                <h1>Login</h1>
              </Link>
              <Link to="/registration">
                <h1>Register</h1>
              </Link>
            </>
          ) : authState.username === "admin" ? (
            <div className="flex">
              <h1
                style={{ cursor: "pointer" }}
                className="username"
                onClick={() => window.open("http://localhost:3333/desk/")}
              >
                Dashboard
              </h1>
              <button
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  navigate("/login");
                  navigate(0);
                }}
                className="logout"
              >
                <h2>Logout</h2>
              </button>
            </div>
          ) : (
            <div className="flex">
              <h1 className="username">{authState.username}</h1>
              <button
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  navigate("/login");
                  navigate(0);
                }}
                className="logout"
              >
                <h2>Logout</h2>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
