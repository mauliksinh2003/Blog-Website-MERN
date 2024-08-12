import React, { useContext, useReducer, useRef } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      // console.error("Failed to login:", error.response.data);
    }
  };

  return (
    <div className="login">
      <div className="maincontainer container">
        <div className="cardcmp card">
          <div className="card-title">
            <h2
              className="text-danger"
              style={{ marginTop: "10px", color: "" }}
            >
              Login
            </h2>
          </div>
          <div className="card-body">
            <form className="form-input" onSubmit={handleSubmit}>
              <div className="input form-group">
                <h5 htmlFor="username">Enter yout Username</h5>
                <input
                  className="form-control"
                  type="username"
                  id="username"
                  required
                  ref={userRef}
                />
              </div>
              <br />
              <div className="input form-group">
                <h5 htmlFor="password">Password</h5>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  required
                  ref={passwordRef}
                />
              </div>
              <br />
              <div className="link">
                <Link to="/register" className="forgot-password">
                  Don't have an account ? Click to Register
                </Link>
                <br />
                <br />
              </div>
              <div className="btn">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
