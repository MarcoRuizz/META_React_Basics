/*
  React Router -> npm i react-router-dom@X.Y.Z
  React cant imitate multi-page websites, so we need to use a router to do that.
*/

import React from "react";
import AboutMe from "./AboutMe";
import Homepage from "./Homepage";

// import the router
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item"> Homepage </Link>
        <Link to="/about-me" className="nav-item"> Homepage </Link>
      </nav>

      {/* add the routes to the components */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
