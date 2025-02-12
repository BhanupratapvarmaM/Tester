import React from "react";
import "./App.css"; // Import the CSS for styling
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Registrations from "./Pages/Registrations";
import Navbar from './Components/Navbar'

const Login = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registrations" element={<Registrations />} />
      </Routes>
    </Router>

 
  );
};

export default Login;
