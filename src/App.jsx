import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import ProductHistoryPage from "./components/Products/Products";
import AboutUs from "./components/About/About";
import Subscription from "./components/Subscription/Subscription"; 
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
           <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductHistoryPage />} /> {/* New */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
