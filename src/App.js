import { Route, Routes } from "react-router-dom";
// import firebase from "firebase/app";
// import "firebase/firestore";
//import Home from "./Home";
import Room from "./Room";
import Home from "./Home";

import About from "./components/About/About";
import Courses from "./components/Course/Course";

// import React, { useEffect } from 'react';
// import firebase from './components/firebase';

import Login from "./components/auth/login";
import Create from "./components/auth/Create";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/room/:roomID" element={<Room />} />
        <Route path="/About-us/:About" element={<About />} />
        <Route path="/Course/:Course" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
