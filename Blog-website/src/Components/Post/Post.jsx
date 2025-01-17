import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {

  const PF = "http://localhost:5000/images/"

  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories &&
            post.categories.map((c) => (
              <span className="postCat">
                <Link className="link" to="/posts?cat=Music">
                  {c.name}
                </Link>
              </span>
            ))}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
