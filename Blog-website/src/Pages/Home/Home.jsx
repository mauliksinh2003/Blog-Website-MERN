import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Posts from "../../Components/Posts/Posts";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div>
      <Header />
      <p className="text text-center">Popular blogs</p>
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
