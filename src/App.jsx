import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  // User state yahan manage karein
  const [user, setUser] = useState({ name: "", email: "" });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;