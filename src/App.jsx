import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import ProductTracking from "./components/Products/Products";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
           <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductTracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
