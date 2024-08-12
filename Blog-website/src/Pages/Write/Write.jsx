import React, { useContext, useState } from "react";
import "./Write.css";
import axios from "axios";
import { Context } from "../../Context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.post("/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <div className="write">
      {file && (
        <div className="writeForm" style={{justifyContent:"center", marginBottom:"10vh"}}>
          <img src={URL.createObjectURL(file)} alt="xyz" className="writeImg" />
        </div>
      )}
      <form className="writeForm" onSubmit={handleSubmit} style={{justifyContent:"center"}}>
        <div className="writeFormGroup">
          {!file && (
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
          )}
          <input
            id="fileInput"
            type="file"
            // value={file}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            // value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            // value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button
          className="writeSubmit"
          type="submit"
          style={{ position: "unset" }}
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
