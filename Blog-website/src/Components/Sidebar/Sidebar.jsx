import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const [cat, setCats] = useState([]);

  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get("/api/categories");
        // console.log(res.data); // Log the API response
        setCats(res.data); // Set state with the data
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    getCats();
  }, []);

  // console.log(cat);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <h3 className="sidebarTitle">About me</h3>
        {user && (
          <img
            style={{ objectFit: "cover" }}
            src={PF + user.profilePicture}
            alt="myimage"
          />
        )}
        <br/>
        {user && (
          <div>
            <h4>{user.username}</h4>
            <p> {user.email}</p>
          </div>
        )}
      </div>
      <div className="sidebarItem">
        <h3 className="sidebarTitle">Categories</h3>
        <ul className="sidebarList">
          {Array.isArray(cat) &&
            cat.map((c, key) => (
              <Link to={`/?cat=${c.name}`} className="link" key={key}>
                <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// <Link to={`/?cat=${c.name}`} className="link">
//             <li className="sidebarListItem">{c.name}</li>
//             </Link>
