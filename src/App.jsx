// import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Sell from "./pages/Sell";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cookies from "js-cookie";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(Cookies.get("tokenVinted") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("tokenVinted", token, { expires: 30 });
      setToken(token);
    } else {
      Cookies.remove("tokenVinted");
      setToken(null);
    }
  };

  return (
    <Router>
      <Header token={token} handleToken={handleToken} />
      <Routes>
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/offers" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </Router>
  );
}

export default App;
