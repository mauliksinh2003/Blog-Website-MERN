import React, { useState } from "react";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/api/auth/register", {
        username: userName,
        email: email,
        password: password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }

    console.log(res);
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="register">
      <div className="login">
        <div className="maincontainer container">
          <div className="cardcmp card">
            <div className="card-title">
              <h2
                className="text-danger"
                style={{ marginTop: "10px", color: "" }}
              >
                Register User
              </h2>
            </div>
            <div className="card-body">
              <form className="form-input" onSubmit={handleSubmit}>
                <div className="input form-group">
                  <h5 htmlFor="email">Set Username</h5>
                  <input
                    className="form-control"
                    type="text"
                    id="username"
                    value={userName}
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <br />
                <div className="input form-group">
                  <h5 htmlFor="email">Email</h5>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <div className="input form-group">
                  <h5 htmlFor="password">Password</h5>
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <br />
                <div style={{ textAlign: "left", marginLeft: "25px" }}>
                  <input type="checkbox"></input>{" "}
                  <label className="text-danger">
                    <h5>Save my info</h5>
                  </label>
                </div>
                <br />
                <div className="btn">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          Registration failed, please try again.
        </div>
      )}
    </div>
  );
};

export default Register;
