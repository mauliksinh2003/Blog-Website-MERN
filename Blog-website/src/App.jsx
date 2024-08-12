import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Setting from "./Pages/Setting/Setting";
import Login from "./Pages/LogIn/Login";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/Contact/Contact";
import { Context } from "./Context/Context";
import { useContext } from "react";

function App() {
  const { user } = useContext(Context);

  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/setting" element={user ? <Setting /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
