import React, { useContext } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    // localStorage.removeItem("token");
    // window.location.reload();
  };
  const PF = "http://localhost:5000/images/";

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">About</li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              Write
            </Link>
          </li>
          {user ? (
            <li className="topListItem" onClick={handleLogout}>
              Log Out
            </li>
          ) : null}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/setting">
            <img className="topImg" src={PF + user.profilePicture} alt="pfp" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login">Log In</Link>
            </li>
            <li className="topListItem">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default Topbar;
